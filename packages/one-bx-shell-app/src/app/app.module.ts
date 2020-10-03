import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  FundamentalNgxCoreModule,
  IconModule,
  LayoutGridModule,
  LayoutPanelModule,
  LinkModule
} from '@fundamental-ngx/core';

import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppShellModule} from '@fundamental-ngx/app-shell';
import {HttpClientModule} from '@angular/common/http';
import {LandingComponent} from './landing/landing.component';
import {FormsModule} from '@angular/forms';
import {IFrameLauncherComponent} from './components/iframe-launcher/iframe-launcher.component';
import {PluginLauncherComponent} from './components/plugin-launcher/plugin-launcher.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule,
    IconModule,
    LayoutGridModule,
    LayoutPanelModule,
    LinkModule,
    FundamentalNgxCoreModule,
    BrowserAnimationsModule,
    AppShellModule.forRoot('assets/config/plugins.json', true),


  ],
  declarations: [
    AppComponent,
    LandingComponent,
    IFrameLauncherComponent,
    PluginLauncherComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}



