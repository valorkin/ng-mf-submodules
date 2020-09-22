import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPageModule } from './item-page/item-page.module';
import { YourFavoritesModule } from './your-favorites/your-favorites.module';

@NgModule({
  imports: [
    CommonModule,
    ItemPageModule,
    YourFavoritesModule
  ],
  exports: [
    ItemPageModule,
    YourFavoritesModule
  ]
})
export class SharedModule {}
