import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aba-item-page',
  templateUrl: './item-page.component.html',
  styles: [`
    .header-detail {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .header-detail .product-image {
      width: 50%;
      margin-left: 20px;
      align-self: center;
    }
    .header-detail .product-image img {
      width: 50%;
      align-self: center;
    }
    .header-detail .shopping-details .actions {
      width: 300px;
    }

    .item-content {
      margin-top: 25px;
    }

    .tab-content {
      padding: 30px;
    }
  `]
  // styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  value1: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
