import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AppState, reducers, selectCounterState } from '../store/app.states';
import { decrement, increment } from '../store/actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  providers: []
  // styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private readonly store: Store<AppState>) {
    this.store.addReducer('counter', reducers.counter)
    this.count$ = store.pipe(
      select(selectCounterState),
      map((state: any) => state.counter));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
