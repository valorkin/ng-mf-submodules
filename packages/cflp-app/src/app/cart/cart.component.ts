import { Component, OnDestroy } from '@angular/core';
import { CartConsumer, CartValue } from '../../../lib/cart.consumer';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnDestroy {
    productIds = [];

    constructor() {
        if (window.addEventListener) {
            window.addEventListener('message', this.onMessage, false);
        }

        const updateCart = (cart: CartValue) => this.productIds = cart.productIds && cart.productIds.length ? cart.productIds : [];
        CartConsumer.getCartProducts(updateCart);
        CartConsumer.cartChanged(updateCart);
    }

    ngOnDestroy(): void {
        window.removeEventListener('message', this.onMessage, false);
    }

    private onMessage(e: any): void {
        console.log('Cart onMessage data -->', e.data);
    }
}
