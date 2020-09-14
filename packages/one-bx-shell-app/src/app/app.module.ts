import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {IconModule, LayoutGridModule, LayoutPanelModule, LinkModule} from '@fundamental-ngx/core';

import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppShellModule} from '@fundamental-ngx/app-shell';
import {HttpClientModule} from '@angular/common/http';
import {LandingComponent} from './landing/landing.component';
import {PluginPageLauncherComponent} from './plugin-page-launcher.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    IconModule, LayoutGridModule, LayoutPanelModule, LinkModule,
    BrowserAnimationsModule,
    AppShellModule.forRoot('assets/config/plugins.json')

  ],
  declarations: [
    AppComponent,
    PluginPageLauncherComponent,
    LandingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



