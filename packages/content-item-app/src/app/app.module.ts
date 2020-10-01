import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DownloadComponent} from './download.component';
import {YourFavoritesModule} from './your-favorites/your-favorites.module';
import {ItemPageModule} from './item-page/item-page.module';

@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    YourFavoritesModule,
    ItemPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
