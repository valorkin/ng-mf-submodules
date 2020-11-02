import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule, ButtonModule, TabsModule } from '@fundamental-ngx/core';
import { IframeItemPageRoutingModule } from './iframe-item-page-routing.module';
import { IframeItemPageComponent } from './iframe-item-page.component';


@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule,
    IframeItemPageRoutingModule,
    ButtonModule,
    TabsModule
  ],
  declarations: [
    IframeItemPageComponent
  ],
  exports: [
    RouterModule,
    IframeItemPageComponent
  ]
})
export class IframeItemPageModule {
}
