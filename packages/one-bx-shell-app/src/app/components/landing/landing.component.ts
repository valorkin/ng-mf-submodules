import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {
    pluginNotFoundErrorText = '';

    moduleRemoteLoadingErrorText = '';

    moduleExposedResolveErrorText = '';

    iframeLoadingErrorText = '';

    componentResolveErrorText = '';

    customElementResolveErrorText = '';

    onCatchPluginNotFoundError(error: Error) {
        this.pluginNotFoundErrorText = error.message;
    }

    onCatchModuleRemoteLoadingError(error: Error) {
        this.moduleRemoteLoadingErrorText = error.message;
    }

    onCatchModuleExposedResolveError(error: Error) {
        this.moduleExposedResolveErrorText = error.message;
    }

    onCatchIframeLoadingError(error: Error) {
      this.iframeLoadingErrorText = error.message;
    }

    onCatchComponentResolveError(error: Error) {
      this.componentResolveErrorText = error.message;
    }

    onCatchCustomElementResolveError(error: Error) {
      this.customElementResolveErrorText = error.message;
    }
}
