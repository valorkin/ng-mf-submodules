import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeItemPageComponent } from './iframe-item-page.component';
import { BreadcrumbModule, ButtonModule, ImageModule, TabsModule } from '@fundamental-ngx/core';
import { IframeItemPageRoutingModule } from './iframe-item-page-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ImageModule,
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
