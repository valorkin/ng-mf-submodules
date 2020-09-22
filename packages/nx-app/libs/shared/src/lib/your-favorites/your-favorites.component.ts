import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aba-your-favorites',
  templateUrl: './your-favorites.component.html',
  styles: [`
    .img-container, .action-container {
      width: 100%;
      display: flex;
    }

    .img-container {
      justify-content: center;
    }

    .action-container {
      justify-content: space-around;
      align-items: center;
    }
    .action-container .fd-button {
      border-radius: 50px;
    }
    .prod-desc {
      color: #4c4c4c;
    }
  `]
  // styleUrls: ['./your-favorites.component.css']
})
export class YourFavoritesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
