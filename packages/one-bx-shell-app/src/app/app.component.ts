import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
      `
      .note {
        position: absolute;
        margin-top: -36px;
        font-style: italic;
        text-align: center;
        width: 100%;
        color: #ff5a1d;

      }
    `
  ]
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }


}

