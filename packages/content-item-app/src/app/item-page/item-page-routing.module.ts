import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemPageComponent } from './item-page.component';
import { loadRemoteModule } from '@fundamental-ngx/app-shell';

const APP_ROUTES: Routes = [
  {
    path: 'item-detail',
    component: ItemPageComponent,
    children: [
      {
        path: 'laptops',
        loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          remoteName: 'contentLaptops',
          exposedModule: 'Laptops'
        })
          .then(m => m.LaptopsModule)
      }
      // loadChildren: () => import(`./modules/laptops/laptops.module`).then(m => m.LaptopsModule)
      // }
      // {
      //   path: 'hard-soft',
      //   loadChildren: () => import(`./modules/hard-soft/hard-soft.module`).then(m => m.HardSoftModule)
      // },
      // {
      //   path: 'apple',
      //   loadChildren: () => import(`./modules/apple/apple.module`).then(m => m.AppleModule)
      // }
    ]
  }
];

export const itemPageRoute: ModuleWithProviders<RouterModule> = RouterModule.forChild(APP_ROUTES);

@NgModule({
  imports: [
    itemPageRoute
  ],
  exports: [
    RouterModule
  ]
})
export class ItemPageRoutingModule {
}
