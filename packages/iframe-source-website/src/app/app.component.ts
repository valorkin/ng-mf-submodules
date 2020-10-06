import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'iframe-source-app';

  constructor() {
    if (window.addEventListener) {
      window.addEventListener('message', this.onMessage, false);
    }
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
