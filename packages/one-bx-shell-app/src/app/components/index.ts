import { LandingComponent } from './landing/landing.component';
import { IframeLandingComponent } from './iframe-landing/iframe-landing.component';
import { IframeLauncherComponent } from './iframe-launcher/iframe-launcher.component';
import { PluginLauncherComponent } from './plugin-launcher/plugin-launcher.component';

export * from './landing/landing.component';
export * from './iframe-landing/iframe-landing.component';
export * from './iframe-launcher/iframe-launcher.component';
export * from './plugin-launcher/plugin-launcher.component';

export const COMPONENTS = [
  LandingComponent,
  IframeLandingComponent,
  IframeLauncherComponent,
  PluginLauncherComponent
];
