import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message, MessagingService, TextMessage, TOPIC_THEME_CHANGE, TopicSubscriber} from '@fundamental-ngx/app-shell';


@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
})
export class PrListComponent implements OnInit, OnDestroy {
  tableRows: any[];
  subscriber: TopicSubscriber<Message>;

  constructor(private messaging: MessagingService) {
  }

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

    this.subscriber = this.messaging.subscribe(TOPIC_THEME_CHANGE, ((m) => {
      console.log('@@@ PR-LIST: Theme changed to => ', m);
    }));
  }

  ngOnDestroy(): void {
    this.subscriber.unSubscribe();
  }

  onItemClicked($event: MouseEvent, id: string): void {
    this.messaging.publish('app:event', new TextMessage('Hello from Pr List: ' + id))
  }
}
