import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/app.states';
import { CounterComponent } from '../counter.component';
import { CounterChildComponent } from './counter-child.component';

@NgModule({
  declarations: [CounterChildComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', reducers.counter)
  ],
  exports: [CounterChildComponent]
})
export class CounterChildModule {
}
