import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CounterComponent } from './counter.component';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {
}
