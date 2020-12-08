import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./counter-child/counter-child.module').then(m => m.CounterChildModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CounterRoutingModule {
}
