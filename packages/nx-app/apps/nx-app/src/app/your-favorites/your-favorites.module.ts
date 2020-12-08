import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@fundamental-ngx/core';
import { YourFavoritesComponent } from './your-favorites.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  declarations: [YourFavoritesComponent],
  exports: [YourFavoritesComponent],
})
export class YourFavoritesModule {
}

export { YourFavoritesComponent };
