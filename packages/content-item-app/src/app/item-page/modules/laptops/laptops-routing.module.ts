import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopsComponent } from './laptops.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LaptopsComponent,
    pathMatch: 'full',
  },
];

export const laptopsPageRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild(APP_ROUTES);

@NgModule({
  imports: [
    laptopsPageRoute
  ],
  exports: [
    RouterModule
  ]
})
export class LaptopsRoutingModule {
}
