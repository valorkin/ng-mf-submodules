import {Component} from '@angular/core';
import {MessagingService, TextMessage} from '@fundamental-ngx/app-shell';
import {CartProvider} from '../../../lib/cart.provider';

@Component({
  selector: 'aba-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent {
  value1 = 2;
  productIds = []


  constructor(private _messaging: MessagingService) {
  }

  onAddToCart($event: MouseEvent): void {
    this.productIds.push('1' + this.productIds.length);
    this._messaging.publish('app:event', new TextMessage('Item Added to Card', 'app:event'));
    CartProvider.updateCart({productIds: [...this.productIds]});
  }
}
