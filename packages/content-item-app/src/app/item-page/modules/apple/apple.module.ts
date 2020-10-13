import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppleRoutingModule } from './apple-routing.module';
import { AppleComponent } from './apple.component';

@NgModule({
  imports: [
    CommonModule,
    AppleRoutingModule
  ],
  exports: [
    AppleComponent
  ],
  declarations: [
    AppleComponent
  ]
})
export class AppleModule {
}
