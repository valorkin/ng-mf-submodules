import {Component, OnInit} from '@angular/core';
import {
  MapMessage,
  Message,
  PluginComponent,
  PluginConfiguration,
  PluginContext,
  TopicPublisher
} from '@fundamental-ngx/app-shell';

@Component({
  selector: 'aba-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements PluginComponent {
  value1 = 2;
  appEventPub: TopicPublisher<Message>;

  initialize(context: PluginContext): void {
    this.appEventPub = context.messaging.createPublisher('app:event');
  }


  getConfiguration(): Partial<PluginConfiguration> {
    return {};
  }

  onAddToCard($event: MouseEvent) {
    const m = new MapMessage('app:event');
    m.set('type', 'add-to-card');
    m.set('payload', {xx: 'aa'});

    this.appEventPub.publish(m);
  }
}
