import {Component, OnInit} from '@angular/core';
import {ProductSwitchItem, ShellbarMenuItem, ShellbarUser, ShellbarUserMenu} from '@fundamental-ngx/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {AppShellProviderService, Message} from '@fundamental-ngx/app-shell';
import { ThemeProvider } from '../lib/theme.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  searchTerm: string;
  _cssUrl: SafeResourceUrl;

  productMenuControl = 'Corporate Portal';

  productMenuItems: ShellbarMenuItem[] = [
    {
      name: 'Application A',
      callback: () => {
        alert('Application A Clicked');
      }
    },
    {
      name: 'Application B',
      callback: () => {
        alert('Application B Clicked');
      }
    },
    {
      name: 'Application C',
      callback: () => {
        alert('Application C Clicked');
      }
    },
    {
      name: 'Application D',
      callback: () => {
        alert('Application D Clicked');
      }
    }
  ];

  user: ShellbarUser = {
    initials: 'WW',
    colorAccent: 1
  };

  userMenu: ShellbarUserMenu[] = [
    {text: 'Settings', callback: this.settingsCallback},
    {text: 'Sign Out', callback: this.signOutCallback}
  ];

  actions = [
    {
      glyph: 'pool',
      callback: this.actionPoolCallback,
      label: 'Pool',
      notificationCount: 3,
      notificationLabel: 'Pool Count'
    },
    {
      glyph: 'bell',
      callback: this.actionNotificationCallback,
      label: 'Notifications',
      notificationCount: 12,
      notificationLabel: 'Unread Notifications'
    }
  ];

  searchTerms = ['Apple', 'Banana', 'Kiwi', 'Strawberry'];

  productSwitcher: ProductSwitchItem[] = [
    {
      title: 'Home',
      subtitle: 'Central Home',
      icon: 'home',
      callback: () => this.productSwitcherCallback('Home '),
      disabledDragAndDrop: true,
      stickToPosition: true
    },
    {
      title: 'Analytics Cloud',
      subtitle: 'Analytics Cloud',
      icon: 'business-objects-experience',
      selected: true
    },
    {
      title: 'Catalog',
      subtitle: 'Ariba',
      icon: 'contacts'
    },
    {
      title: 'Guided Buying',
      icon: 'credit-card'
    },
    {
      title: 'Strategic Procurement',
      icon: 'cart-3'
    },
    {
      title: 'Vendor Managemen',
      subtitle: 'Fieldglass',
      icon: 'shipping-status'
    },
    {
      title: 'Human Capital Management',
      icon: 'customer'
    },
    {
      title: 'Sales Cloud',
      subtitle: 'Sales Cloud',
      icon: 'sales-notification'
    },
    {
      title: 'Commerce Cloud',
      subtitle: 'Commerce Cloud',
      icon: 'retail-store'
    },
    {
      title: 'Marketing Cloud',
      subtitle: 'Marketing Cloud',
      icon: 'marketing-campaign'
    },
    {
      title: 'Service Cloud',
      icon: 'family-care'
    },
    {
      title: 'S/4HANA',
      icon: 'batch-payments'
    }
  ];

  themes = [
    {
      id: 'sap_fiori_3',
      name: 'Fiori 3'
    },
    {
      id: 'sap_fiori_3_dark',
      name: 'Fiori 3 Dark'
    },
    {
      id: 'sap_fiori_3_hcb',
      name: 'High Contrast Black'
    },
    {
      id: 'sap_fiori_3_hcw',
      name: 'High Contrast White'
    }
  ];


  constructor(private sanitizer: DomSanitizer, public _appShell: AppShellProviderService) {
    this._appShell.messageBus.subscribe('app:event', (m: Message) => {
      this.onAppEvent(m);
    });
  }

  ngOnInit(): void {
    this._cssUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/theme/sap_fiori_3.css');
    this._appShell.themeManager.themeChanged(this.themes[0].id, this.themes[0].name);
    ThemeProvider.setCurrentTheme({...this.themes[0], url: `${location.href}assets/theme/sap_fiori_3.css`});
  }


  settingsCallback($event): void {
    console.log($event);
    alert('Settings Clicked');
  }

  signOutCallback($event): void {
    console.log($event);
    alert('Sign Out Clicked');
  }

  actionNotificationCallback($event): void {
    console.log($event);
    alert('Notification Action Clicked');
  }

  actionPoolCallback($event): void {
    console.log($event);
    alert('Pool Action Clicked');
  }

  productSwitcherCallback(product): void {
    alert(product + 'Product Clicked');
  }

  onSelectTheme(id: string, name: string): void {
    this._cssUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/theme/' + id + '.css');
    this._appShell.themeManager.themeChanged(id, name);
    ThemeProvider.changeTheme({id, name, url: `${location.href}assets/theme/${id}.css`});
  }

  onAppEvent(m: Message): void {
    console.log('AppShell received => ', m);
  }

}

