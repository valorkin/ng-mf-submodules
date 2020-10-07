import { Component } from '@angular/core';

@Component({
  selector: 'app-iframe-landing',
  templateUrl: './iframe-landing.component.html',
  styleUrls: ['./iframe-landing.component.scss']
})
export class IframeLandingComponent {

  resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 20 + 'px';
  }
}
