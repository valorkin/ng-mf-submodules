import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemDetailsModule } from './item-details/item-details.module';
import { YourFavoritesModule } from './your-favorites/your-favorites.module';
import { ItemPageModule } from './item-page/item-page.module';
import { IframeItemPageModule } from './iframe-item-page/iframe-item-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YourFavoritesModule,
    ItemPageModule,
    IframeItemPageModule,
    ItemDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
