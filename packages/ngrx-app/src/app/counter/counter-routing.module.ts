import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter.component';

const APP_ROUTES: Routes = [
  {path: 'calc', component: CounterComponent}
];

export const counterRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild(APP_ROUTES);

@NgModule({
  imports: [
    counterRoute
  ],
  exports: [
    RouterModule
  ]
})
export class CounterRoutingModule {
}
