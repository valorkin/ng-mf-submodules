import {Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
// import {PluginPageLauncherComponent} from '@fundamental-ngx/app-shell';
import {PluginPageLauncherComponent} from './plugin-page-launcher.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LandingComponent
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
