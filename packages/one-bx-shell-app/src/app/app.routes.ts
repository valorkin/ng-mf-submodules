import { Routes } from '@angular/router';
import { PluginPageLauncherComponent } from '@fundamental-ngx/app-shell';
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
    path: ':remote-route',
    component: PluginPageLauncherComponent
  }
];
