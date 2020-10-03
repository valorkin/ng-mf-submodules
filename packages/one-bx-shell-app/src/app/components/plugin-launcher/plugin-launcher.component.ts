import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Injector,
  Input,
  OnChanges,
  Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  isPluginComponent,
  loadRemoteModule,
  LookupService,
  PluginDescriptor,
  PluginManagerService,
  Scope
} from '@fundamental-ngx/app-shell';

export type ExtendedPluginDescriptor = PluginDescriptor & {
  framework: string;
};

/**
 *
 * Test different scenarios and then integrate back to app-shell api
 *
 */
@Component({
  selector: 'app-plugin-laucher',
  template: '<ng-container #view></ng-container>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PluginLauncherComponent implements OnChanges {
  @Input()
  type: Scope = Scope.Page;

  @Input()
  name: string;

  @Input()
  category: string;

  @Input()
  provider: string;

  @Input()
  descriptor: Partial<PluginDescriptor>;

  @ViewChild('view', {read: ViewContainerRef, static: true})
  viewContainer: ViewContainerRef;


  constructor(private _injector: Injector,
              private _elementRef: ElementRef,
              private cfr: ComponentFactoryResolver,
              private _cd: ChangeDetectorRef,
              private _render: Renderer2,
              private _pluginMgr: PluginManagerService,
              private lookupService: LookupService) {
  }

  async ngOnChanges(): Promise<void> {
    this.viewContainer.clear();

    if (!this.descriptor) {
      const item = this.lookupService.lookup(this.initQuery());
      if (!item) {
        return;
      }
      this.descriptor = item.descriptor;
    }
    this.doCreateComponent(this.descriptor);
  }


  async doCreateComponent(descriptor: Partial<ExtendedPluginDescriptor>): Promise<void> {
    const component = await loadRemoteModule(descriptor)
      .then(m => m[descriptor.componentName]);

    if (descriptor.framework === 'legacy') {
      const element = document.createElement(component);
      this._render.appendChild(this._elementRef.nativeElement, element);

    } else {
      const factory = this.cfr.resolveComponentFactory(component);
      const componentRef: ComponentRef<any> = this.viewContainer.createComponent(factory, null, this._injector);

      if (isPluginComponent(componentRef.instance)) {
        this._pluginMgr.register(descriptor, componentRef.instance);
      }
    }
    this._cd.detectChanges();
  }

  private initQuery(): Map<string, any> {
    const query = new Map();
    if (this.provider) {
      query.set('provider', this.provider);
    }
    if (this.category) {
      query.set('category', this.category);
    }

    if (this.name) {
      query.set('name', this.name);
    }
    return query;
  }
}
