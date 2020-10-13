import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaptopsRoutingModule } from './laptops-routing.module';
import { LaptopsComponent } from './laptops.component';

@NgModule({
  imports: [
    CommonModule,
    LaptopsRoutingModule
  ],
  exports: [
    LaptopsComponent
  ],
  declarations: [
    LaptopsComponent
  ]
})
export class LaptopsModule {
}
