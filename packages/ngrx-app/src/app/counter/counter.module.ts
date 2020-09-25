import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { CounterChildComponent } from './counter-child/counter-child.component';


@NgModule({
  declarations: [
    CounterComponent,
    CounterChildComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {
}
