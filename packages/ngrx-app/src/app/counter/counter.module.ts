import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/app.states';
import { CounterEffects } from '../store/effects';
import { CounterChildModule } from './counter-child/counter-child.module';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([CounterEffects]),
    CounterChildModule,
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {
}

export { CounterComponent };
