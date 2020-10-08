import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ThemeConsumer, ThemeValue } from '../../lib/theme.consumer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'iframe-source-app';
  themeSrc?: SafeUrl;

  constructor(domSanitizer: DomSanitizer) {
    if (window.addEventListener) {
      window.addEventListener('message', this.onMessage, false);
    }
    const updateTheme = (theme: ThemeValue) => this.themeSrc = domSanitizer.bypassSecurityTrustResourceUrl(theme.url);
    ThemeConsumer.getCurrentTheme(updateTheme);
    ThemeConsumer.themeChanged(updateTheme);
  }

  onAction(event: any, msg: string): void {
    console.log('Sending Message To Parent');
    window.parent.postMessage('Navigate to ' + msg, '*');
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.onMessage, false);
  }

  private onMessage(e: any): void {
    console.log(e);
  }
}
