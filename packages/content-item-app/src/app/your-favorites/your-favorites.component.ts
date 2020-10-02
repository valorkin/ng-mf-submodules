import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {
  Listener,
  Message,
  PluginComponent,
  PluginConfiguration,
  PluginContext,
  TextMessage
} from '@fundamental-ngx/app-shell';

@Component({
  selector: 'aba-your-favorites',
  templateUrl: './your-favorites.component.html',
  styleUrls: ['./your-favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YourFavoritesComponent implements OnInit, PluginComponent {

  receivedTextFromOtherApp: string = 'Nothing';

  private appEvent = new Listener('app:event', '', (m: Message) => {
    if (m instanceof TextMessage) {
      this.receivedTextFromOtherApp = m.text;

      alert('This your favorite panel => ' + m.text);
      this._cd.detectChanges();
    }
  });

  constructor(private _cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  getConfiguration(): Partial<PluginConfiguration> {
    const event = this.appEvent;
    return {
      addListeners: function (): Array<Listener> {
        return [event]
      }
    };
  }

  initialize(context: PluginContext): void {
  }
}
