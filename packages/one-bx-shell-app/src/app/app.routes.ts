import { Routes } from '@angular/router';
import { loadRemoteModule, PluginPageLauncherComponent } from '@fundamental-ngx/app-shell';
import { LandingComponent } from './components';
import { IframeLandingComponent } from './components';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'iframe',
    component: IframeLandingComponent
  },
  {
    path: 'item-details',
    // @ts-ignore
    loadChildren:
    // todo_valorkin this should work when we switch to cli builder
    // () => import('contentItemApp/ItemPageModule').then(m => m.ItemPageModule)
      () => loadRemoteModule({
        uri: 'http://localhost:4202/remoteEntry.js',
        name: 'contentItemApp'
      }, {exposedModule: './ItemPageModule'} as any)
        .then(m => {
          console.log(m);
          return m.ItemPageModule;
        })
  },
  {
    path: ':remote-route',
    component: PluginPageLauncherComponent
  }
];
