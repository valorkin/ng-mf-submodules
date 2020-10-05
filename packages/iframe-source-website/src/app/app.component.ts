import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iframe-source-app';


  constructor() {
    if (window.addEventListener) {
      window.addEventListener('message', this.onMessage, false);
    }
  }

  private onMessage(e: any): void {
    console.log(e);
  }

  onAction(event: any, msg: string): void {
    console.log('Sending Message To Parent');
    window.parent.postMessage('Navigate to ' + msg, '*');
  }
}
