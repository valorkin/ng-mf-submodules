import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FundamentalNgxCoreModule} from '@fundamental-ngx/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FundamentalNgxCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
