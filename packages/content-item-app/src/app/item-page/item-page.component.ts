import { Component } from '@angular/core';
import {
  MessagingService,
  PluginComponent,
  PluginConfiguration,
  PluginContext
} from '@fundamental-ngx/app-shell';
import { CartProvider } from '../../../lib/cart.provider';

@Component({
  selector: 'aba-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements PluginComponent {
  value1 = 2;
  private messaging: MessagingService;
  productIds = []

  initialize(context: PluginContext): void {
    this.messaging = context.messaging;
  }

  getConfiguration(): Partial<PluginConfiguration> {
    return {};
  }

  onAddToCart($event: MouseEvent): void {
    this.productIds.push('1' + this.productIds.length);
    CartProvider.updateCart({productIds: [...this.productIds]});
  }
}
