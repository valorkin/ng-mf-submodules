import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IframeItemPageComponent } from './iframe-item-page.component';

const APP_ROUTES: Routes = [
  {path: 'iframe-item-detail', component: IframeItemPageComponent}
];

export const iframeItemPageRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild(APP_ROUTES);

@NgModule({
  imports: [
    iframeItemPageRoute
  ],
  exports: [
    RouterModule
  ]
})
export class IframeItemPageRoutingModule {
}
