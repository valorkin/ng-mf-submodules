import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '../../../../libs/shared/src';
import { YourFavoritesModule } from './your-favorites/your-favorites.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    YourFavoritesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
