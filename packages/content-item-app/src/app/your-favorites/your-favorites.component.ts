import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Message, MessagingService, TextMessage, TOPIC_APP_EVENT} from '@fundamental-ngx/app-shell';
import {TopicSubscriber} from '@fundamental-ngx/app-shell/lib/api/events/message-bus';

@Component({
  selector: 'aba-your-favorites',
  templateUrl: './your-favorites.component.html',
  styleUrls: ['./your-favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YourFavoritesComponent implements OnInit, OnDestroy {
  receivedTextFromOtherApp: string = 'Nothing';
  subscriber: TopicSubscriber<Message>;


  constructor(private _cd: ChangeDetectorRef, private _msg: MessagingService) {
  }

  ngOnInit(): void {

    this.subscriber = this._msg.subscribe(TOPIC_APP_EVENT, (m => {
      if (m instanceof TextMessage) {
        this.receivedTextFromOtherApp = m.text;

        alert('This your favorite panel => ' + m.text);
        this._cd.detectChanges();
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriber.unSubscribe();
  }
}
