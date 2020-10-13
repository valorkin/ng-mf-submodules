import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardSoftRoutingModule } from './hard-soft-routing.module';
import { HardSoftComponent } from './hard-soft.component';

@NgModule({
  imports: [
    CommonModule,
    HardSoftRoutingModule
  ],
  exports: [
    HardSoftComponent
  ],
  declarations: [
    HardSoftComponent
  ]
})
export class HardSoftModule {
}
