import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule, ButtonModule, TabsModule } from '@fundamental-ngx/core';
import { ItemPageRoutingModule } from './item-page-routing.module';
import { ItemPageComponent } from './item-page.component';


@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule,
    ItemPageRoutingModule,
    ButtonModule,
    TabsModule
  ],
  declarations: [
    ItemPageComponent
  ],
  exports: [
    RouterModule,
    ItemPageComponent
  ],
})
export class ItemPageModule {
}
