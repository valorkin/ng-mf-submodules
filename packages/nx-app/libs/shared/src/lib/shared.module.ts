import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPageModule } from './item-page/item-page.module';

@NgModule({
  imports: [
    CommonModule,
    ItemPageModule
  ],
  exports: [
    ItemPageModule
  ]
})
export class SharedModule {}
