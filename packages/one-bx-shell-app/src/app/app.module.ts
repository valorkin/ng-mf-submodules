import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  FundamentalNgxCoreModule,
  IconModule,
  LayoutGridModule,
  LayoutPanelModule,
  LinkModule,
  AvatarModule,
  ButtonModule,
  MenuModule,
  ShellbarModule
} from '@fundamental-ngx/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AppShellModule,
  IS_APPSHELL_STANDALONE
} from '@fundamental-ngx/app-shell';
import { ShellBarService } from './api/shell-bar.service';

import { HttpClientModule } from '@angular/common/http';
import {
  IframeLandingComponent,
  LandingComponent,
  AppShellHeaderComponent,
  AppShellContentComponent,
  AppShellFooterComponent,
  AppShellPageComponent
} from './components';

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
    AvatarModule,
    ButtonModule,
    MenuModule,
    ShellbarModule,
    BrowserAnimationsModule,
    AppShellModule.forRoot('assets/config/plugins.json')
  ],
  declarations: [
    AppComponent,
    IframeLandingComponent,
    LandingComponent,
    AppShellHeaderComponent,
    AppShellContentComponent,
    AppShellFooterComponent,
    AppShellPageComponent,
  ],
  providers: [
    {
      provide: ShellBarService,
      useFactory: shellBarSrv,
      deps: [IS_APPSHELL_STANDALONE]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function shellBarSrv(isStandalone: boolean): ShellBarService | null {
  return isStandalone ? new ShellBarService() : null;
}

