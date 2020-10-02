import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemPageComponent} from './item-page.component';
import {RouterModule} from '@angular/router';
import {BreadcrumbModule, ButtonModule, ImageModule, TabsModule} from '@fundamental-ngx/core';
import {ItemPageRoutingModule} from './item-page-routing.module';
import {AppShellModule} from '@fundamental-ngx/app-shell';


@NgModule({
  imports: [
    CommonModule,
    ImageModule,
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
  ],
})
export class ItemPageModule {
}
