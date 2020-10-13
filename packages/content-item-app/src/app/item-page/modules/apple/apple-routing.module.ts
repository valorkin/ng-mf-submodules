import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from './apple.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppleComponent,
    pathMatch: 'full',
  },
];

export const applePageRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild(APP_ROUTES);

@NgModule({
  imports: [
    applePageRoute
  ],
  exports: [
    RouterModule
  ]
})
export class AppleRoutingModule {
}
