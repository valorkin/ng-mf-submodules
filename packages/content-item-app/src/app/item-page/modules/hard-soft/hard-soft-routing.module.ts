import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardSoftComponent } from './hard-soft.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HardSoftComponent,
    pathMatch: 'full',
  },
];

export const hardSoftPageRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild(APP_ROUTES);

@NgModule({
  imports: [
    hardSoftPageRoute
  ],
  exports: [
    RouterModule
  ]
})
export class HardSoftRoutingModule {
}
