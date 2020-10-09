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
  // {
  //   path: 'catalog',
  //   component: PluginPageLauncherComponent,
  //   children: [
  //     {path: '', redirectTo: 'tracks'},
  //     {path: ':plugin-id', component: ArtistTrackListComponent}, (2)
  //     {path: 'albums', component: ArtistAlbumListComponent}, (3)
  //   ]
  // }
];
