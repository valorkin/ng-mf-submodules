import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { AppState, selectCounterState } from '../../store/app.states';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html'
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
