import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PrListModule} from './pr-list/pr-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
