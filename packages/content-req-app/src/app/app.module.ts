import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DownloadComponent} from './download.component';
import {PrListModule} from './pr-list/pr-list.module';

@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent
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
