import {
    Injectable,
    NgZone
} from '@angular/core';
import {
    ThemeManagerService,
    MessagingService
} from '@fundamental-ngx/app-shell';
import { ShellBarService } from './shell-bar.service';

@Injectable({ providedIn: 'root' })
export class AppShellProviderService {

    constructor(private ngZone: NgZone,
                public themeManager: ThemeManagerService,
                public messageBus: MessagingService,
                public shellBar?: ShellBarService
    ) {
        /**
         * We could also create different web workers  that can communicate with each other, but
         * as starter Window should work
         */
        window['appShellProvider'] = { ref: this, zone: ngZone };
    }
}


