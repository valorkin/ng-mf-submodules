import {Component} from '@angular/core';
import {
  MapMessage,
  MessagingService,
  PluginComponent,
  PluginConfiguration,
  PluginContext
} from '@fundamental-ngx/app-shell';

@Component({
  selector: 'aba-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements PluginComponent {
  value1 = 2;
  private messaging: MessagingService;

  initialize(context: PluginContext): void {
    this.messaging = context.messaging;
  }

  getConfiguration(): Partial<PluginConfiguration> {
    return {};
  }

  onAddToCard($event: MouseEvent) {
    const m = new MapMessage('app:event');
    m.set('type', 'add-to-card');
    m.set('payload', {xx: 'aa'});

    this.messaging.publish('app:event', m);
  }
}
