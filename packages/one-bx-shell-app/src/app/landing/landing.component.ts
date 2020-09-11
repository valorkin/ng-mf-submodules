import {Component} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: [`
    .carousel-container {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 20px;
      height: 250px;
    }
  `]
})
export class LandingComponent {
  showPRList = false;
  showYourFav = false;

  constructor() {
  }

}
