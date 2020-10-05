import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FundamentalNgxCoreModule, IconModule} from '@fundamental-ngx/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FundamentalNgxCoreModule,
    BrowserAnimationsModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
