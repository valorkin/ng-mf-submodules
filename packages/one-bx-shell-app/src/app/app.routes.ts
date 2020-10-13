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
    path: ':remote-route',
    component: PluginPageLauncherComponent
  }
  // {
  //   path: 'item-detail',
  //   loadChildren: () => loadRemoteModule({
  //     remoteEntry: 'http://localhost:4202/remoteEntry.js',
  //     remoteName: 'contentLaptops',
  //     exposedModule: 'Laptops'
  //   })
  //     .then(m => m.ItemPageModule)
  // },
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
