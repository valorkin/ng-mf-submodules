import {Component, OnInit} from '@angular/core';
import {
  Listener,
  Message,
  Permission,
  PluginComponent,
  PluginConfiguration,
  PluginContext
} from '@fundamental-ngx/app-shell';


/**
 * Should we have interface or crete custom decorator
 *
 * ```ts
 * @PluginComponent({
 *   configuration: PrListPluginConfiguration
 * })
 * ```
 * but then I still want to initialize ?
 *
 */
@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
})
export class PrListComponent implements OnInit, PluginComponent {
  tableRows: any[];

  ngOnInit(): void {
    this.tableRows = [
      {
        column1: 'PR1233',
        column2: 'Shoes II. ',
        column3: 'Mar 30, 2020',
        column4: '3',
        column5: '$10,500.00 USD'
      },
      {
        column1: 'PR5555',
        column2: 'Laptop 123.XX. ',
        column3: 'Mar 31, 2020',
        column4: '1',
        column5: '$500.00 USD'
      },
      {
        column1: 'PR1200',
        column2: 'Wheel 13"',
        column3: 'May 03, 2020',
        column4: '2',
        column5: '$200.00 USD'
      },
      {
        column1: 'PR1233',
        column2: 'Shoes II. ',
        column3: 'Mar 30, 2020',
        column4: '3',
        column5: '$10,500.00 USD'
      }
    ];
  }

  initialize(context: PluginContext): void {
    console.log('Initializing Remote Component PrListComponent');
  }

  getConfiguration(): Partial<PluginConfiguration> {
    return new PrListPluginConfiguration();
  }
}

export class PrListPluginConfiguration implements Partial<PluginConfiguration> {

  getAngularVersionCompatibility(): string {
    return '10.1.1';
  }

  getPermission(): Permission {
    return new Permission(true);
  }

  addListeners(): Array<Listener> {
    const themeChange = new Listener('Listening for Theming changes', 'theme:change',
      (m: Message) => {
        console.log('@@@ PR-LIST: Theme changed to => ', m);
      });
    return [themeChange];


  }

}
