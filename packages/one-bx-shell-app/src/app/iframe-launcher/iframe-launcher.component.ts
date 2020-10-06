import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LookupService } from '@fundamental-ngx/app-shell';

interface MFFrameConfiguration {
  name: string;
  module?: string;
  entry: string;
  iframe: string;

  scope?: string;
  category?: string;
  hasRoutes?: boolean;
}

interface MFAppConfiguration {
  id: string;
  provider?: string;
  version: string;
  host: string;
  components: Record<string, MFFrameConfiguration>;
}

@Component({
  selector: 'fds-iframe-launcher2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iframe
      #iframe
      load="onLoad(iframe)"
      *ngIf="iconfig?.src"
      [src]="iconfig.src"
    ></iframe>
  `
})
export class IframeLauncherComponent implements OnChanges, AfterViewInit {
  @ViewChild('iframe', {static: false}) iframeEl: ElementRef;
  iconfig: {src: string, attrs: Record<string, string>};

  @Input() app: string;
  @Input() component: string;
  @Input() attrs: Record<string, string | number>;

  constructor(private render: Renderer2,
              private lookupService: LookupService,
              private sanitizer: DomSanitizer) {
  }

  ngOnChanges(): void {
    if (this.app && this.component) {
      const iconfig = this.getIframeConfig();
      this.updateAttrs(iconfig.attrs, this.iconfig?.attrs);
      this.iconfig = iconfig;
    }
  }

  ngAfterViewInit(): void {
    this.updateAttrs(this.iconfig.attrs);
  }

  private updateAttrs(newValue: Record<string, string>, oldValue?: Record<string, string>): void {
    if (!this.iframeEl) {
      return;
    }
    if (oldValue) {
      for (const key of Object.keys(oldValue)) {
        this.render.removeAttribute(this.iframeEl.nativeElement, key);
      }
    }
    if (newValue) {
      for (const key of Object.keys(newValue)) {
        this.render.setAttribute(this.iframeEl.nativeElement, key, `${newValue[key]}`);
      }
    }
  }

  private getIframeConfig(): any {
    const appConfig = this.lookupService
      // todo: valorkin: this configuration seems to be more appropriate
      .lookup(new Map([['name', this.app]])) as unknown as { descriptor: MFAppConfiguration };
    const frameConfig = appConfig.descriptor.components[this.component];
    const iframeUrl = this.sanitizer
      .bypassSecurityTrustResourceUrl(`${appConfig.descriptor.host}${frameConfig.iframe}`);
    return {
      src: iframeUrl,
      attrs: Object.assign({}, this.attrs)
    };
  }
}
