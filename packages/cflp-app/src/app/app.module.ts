import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        FundamentalNgxCoreModule
    ],
    declarations: [
        AppComponent,
        CartComponent
    ],
    providers: [],
    entryComponents: [
        CartComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private readonly injector: Injector) {}

    ngDoBootstrap(): void {
        const el = createCustomElement(CartComponent, {injector: this.injector});
        customElements.define('app-cart', el);
    }
}
