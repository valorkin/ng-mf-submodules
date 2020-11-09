import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver, ComponentRef,
  DoCheck,
  ElementRef,
  Injector,
  Input,
  KeyValueChangeRecord,
  KeyValueDiffer,
  KeyValueDiffers,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {
  AngularIvyComponentDescriptor,
  loadRemoteModule,
  LookupService,
  PluginDescriptor,
  PluginManagerService
} from '@fundamental-ngx/app-shell';

@Component({
  selector: 'app-plugin-launcher',
  template: `
    <ng-container #view></ng-container>
    <iframe
      *ngIf="_safeIframeUri"
      #iframe
      class="responsive-wrapper"
      [src]="_safeIframeUri"
      [style.minHeight]="iframeAttrs.height"
    ></iframe>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PluginLauncherComponent implements OnChanges, AfterViewChecked, DoCheck {
  /** plugin name */
  @Input()
  name: string;

  /** module name */
  @Input()
  module: string;

  /** Iframe URI */
  @Input()
  iframeUri: string;
  @Input()
  iframeAttrs: Record<string, string | number>;

  @Input()
  bindings: Map<string, any> = new Map<string, any>();

  @ViewChild('view', {read: ViewContainerRef, static: true})
  ngContentView: ViewContainerRef;

  @ViewChild('iframe', {static: false})
  iframeEl: ElementRef;

  _safeIframeUri: SafeResourceUrl;
  private descriptor: Partial<PluginDescriptor>;
  private bindingsDiffer: KeyValueDiffer<string, any>;
  private _compRef: ComponentRef<any>;

  constructor(private readonly _injector: Injector,
              private readonly _elementRef: ElementRef,
              private readonly cfr: ComponentFactoryResolver,
              private readonly _cd: ChangeDetectorRef,
              private readonly _render: Renderer2,
              private readonly _pluginMgr: PluginManagerService,
              private readonly lookupService: LookupService,
              private readonly sanitizer: DomSanitizer,
              private _differs: KeyValueDiffers) {
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if ('iframeUri' in changes) {
      this._safeIframeUri = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeUri);
    }

    if ('name' in changes) {
      const {descriptor} = this.lookupService.lookup(new Map([['name', this.name]]));
      if (!this.descriptor || this.descriptor.name !== descriptor.name) {
        this.descriptor = descriptor;
        this.renderPlugin(this.descriptor);
      }
    }
  }

  ngDoCheck(): void {
    if (this.bindingsDiffer) {
      const changes = this.bindingsDiffer.diff(this.bindings);
      if (changes) {
        changes.forEachChangedItem((record: KeyValueChangeRecord<string, any>) => {
          console.log('Detected [bindings] changes ', record)
          this._compRef.instance[record.key] = record.currentValue;
          this._compRef.changeDetectorRef.detectChanges();
        });
      }


    }
  }


  ngAfterViewChecked(): void {
    if (this._safeIframeUri) {
      this.updateAttrs(this.iframeAttrs);
    }
  }

  async renderPlugin(descriptor: Partial<PluginDescriptor>): Promise<void> {
    if (!descriptor) {
      return;
    }
    const _module = descriptor.modules.find(module => module.name === this.module);
    const _component = await loadRemoteModule<AngularIvyComponentDescriptor>(descriptor, _module as AngularIvyComponentDescriptor)
      .then(m => m[_module.name])
      .catch(err => console.error(err));

    if (_module.type !== 'iframe' && !this.iframeUri) {
      this._safeIframeUri = null;
    }

    if (_module.type === 'iframe') {
      const _url = descriptor.uri + _module.html;
      this._safeIframeUri = this.sanitizer.bypassSecurityTrustResourceUrl(_url);
      return;
    }

    if (_module.type === 'custom-element') {
      const element = document.createElement(_component);
      this._render.appendChild(this._elementRef.nativeElement, element);
      return;
    }

    if (_module.type === 'angular-ivy-component' && this.ngContentView) {
      this.ngContentView.clear();
      const factory = this.cfr.resolveComponentFactory(_component);
      this._compRef = this.ngContentView.createComponent(factory, null, this._injector);
      this.initializeBindings(factory.inputs);

      this._cd.detectChanges();
    }
    this._pluginMgr.register(descriptor);
  }

  private updateAttrs(newValue: Record<string, string | number>, oldValue?: Record<string, string>): void {
    if (!this._safeIframeUri) {
      return;
    }
    if (oldValue) {
      for (const key of Object.keys(oldValue)) {
        this._render.removeAttribute(this.iframeEl.nativeElement, key);
      }
    }
    if (newValue) {
      for (const key of Object.keys(newValue)) {
        this._render.setAttribute(this.iframeEl.nativeElement, key, `${newValue[key]}`);
      }
    }
  }

  private initializeBindings(inputs: { propName: string; templateName: string; }[]): void {
    const componentInstance = this._compRef.instance;
    if (inputs) {
      inputs.forEach(input => {
        // check type
        if (componentInstance[input.propName] === undefined || (this.bindings.has(input.propName) &&
          (this.bindings.get(input.propName) as any).constructor.name !== componentInstance[input.propName].constructor.name)) {
          console.warn(`Missing or invalid @Input() type ${input.propName}`);

          this.bindings.delete(input.propName);
        } else {
          // one-way bindings, but we can wrap this componentInstance[input] with Object.defineProperty(...) to listen
          // input changes inside the component.
          componentInstance[input.propName] = this.bindings.get(input.propName);
        }
      });
    }

    if (this.bindings.size > 0 && !this.bindingsDiffer) {
      this.bindingsDiffer = this._differs.find(this.bindings).create();
    }
  }
}
