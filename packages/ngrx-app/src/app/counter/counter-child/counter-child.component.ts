import { Component } from '@angular/core';
import { select, Store, StoreModule } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AppState, reducers, selectCounterState } from '../../store/app.states';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.scss'],
  providers: [
    StoreModule.forFeature('counter', reducers.counter).providers
  ]
})
export class CounterChildComponent {
  count$: Observable<number>;

  constructor(
    private readonly store: Store<AppState>
  ) {
    this.count$ = store.pipe(
      select(selectCounterState),
      map((state: any) => state.counter));
  }
}
