import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { YourFavoritesModule } from './your-favorites/your-favorites.module';
import { ItemPageModule } from './item-page/item-page.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YourFavoritesModule,
    ItemPageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
