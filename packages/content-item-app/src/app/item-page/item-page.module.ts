import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShellModule } from '@fundamental-ngx/app-shell';
import { BreadcrumbModule, ButtonModule, TabsModule } from '@fundamental-ngx/core';
import { ItemPageRoutingModule } from './item-page-routing.module';
import { ItemPageComponent } from './item-page.component';

@NgModule({
  imports: [
    CommonModule,
    // ImageModule,
    BreadcrumbModule,
    ItemPageRoutingModule,
    ButtonModule,
    TabsModule,
    AppShellModule
  ],
  declarations: [
    ItemPageComponent
  ],
  exports: [
    RouterModule,
    ItemPageComponent
  ]
})
export class ItemPageModule {
}
