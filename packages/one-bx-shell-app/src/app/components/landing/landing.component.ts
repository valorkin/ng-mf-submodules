import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  prBindings: Map<string, any> = new Map<string, any>();


  constructor(private _cd: ChangeDetectorRef) {
    this.prBindings.set('showTitle', false);
    this.prBindings.set('title', 'My PR List');


    setTimeout(() => {
      this.prBindings.set('showTitle', true);
      console.log('setting title');

      this._cd.markForCheck();
    }, 10 * 1000);
  }
}
