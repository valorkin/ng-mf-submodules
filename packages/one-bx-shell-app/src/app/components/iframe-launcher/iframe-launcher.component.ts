import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


/**
 * This should be part of the plugin launcher and depending on the framework type we should either instantiate
 * remote all, or use directly this iFrame wrapper.
 *
 * IFrame launcher loads directly legacy application and they are not exposed as Module Federation plugin.
 * If these legacy application would have such capability there would be no need this component;
 *
 *
 *
 * We will extend PluginDescriptor with additional properties and if framework is Legacy we will handle this by iFrame
 * component. All this will be handled by
 *
 * <fdp-plugin-launcher name="fieldGlass.LandingLinks">
 * </fdp-plugin-launcher>
 *
 * This component can be used also as standalone
 *
 * Todo:
 *  - Finish fds-iframe-launcher standalone component, abstract whatever needs to be abstracted
 *  - Expand existing communication to some API
 *    AppShell -> iFrameLauncher -> iFrame contentWindow
 *    iFrame contentWindow -> iFrameLauncher -> the host app
 *   - Make it part of the plugin luncher and extend configuration.
 *
 *
 *
 *
 */
@Component({
  selector: 'fds-iframe-launcher',
  templateUrl: './iframe-launcher.component.html',
  styleUrls: ['./iframe-launcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IFrameLauncherComponent implements OnInit, OnChanges, AfterViewInit {
  @Input()
  url: string;

  @Input()
  id: string;

  @Input()
  title: string;

  @Input()
  height: string;

  @Input()
  attrs: Record<string, string | number>;

  @ViewChild('iframe', {static: false})
  iframeEl: ElementRef;

  _iFrameUrl: SafeUrl;

  private iframeHandle: any;

  // tslint:disable-next-line:variable-name
  constructor(private _render: Renderer2, private _sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.url) {
      this._iFrameUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
    this.updateAttrs(this.attrs);
  }

  ngAfterViewInit(): void {
    this.updateAttrs(this.attrs);

    this.setupCommunicationChannel();


    setTimeout(() => {
      this.iframeHandle.postMessage('Hello From AppShell', 'http://localhost:5400');
    }, 5000);
  }

  private setupCommunicationChannel(): void {
    if (this.iframeEl) {
      this.iframeHandle = this.iframeEl.nativeElement.contentWindow;
      window.addEventListener('message', this.onMessage, false);
    }
  }

  private onMessage(e: any): void {
    console.log('This is iFrame Launcher received message from iFrame => ', e);
  }

  private updateAttrs(newValue: Record<string, string | number>): void {
    if (!this.iframeEl) {
      return;
    }
    if (newValue) {
      for (const key of Object.keys(newValue)) {
        this._render.setAttribute(this.iframeEl.nativeElement, key, `${newValue[key]}`);
      }
    }
  }
}
