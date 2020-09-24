import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.states';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    StoreModule.forRoot(reducers, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
