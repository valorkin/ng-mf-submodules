import { Component, Injector, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { map } from 'rxjs/operators';
import { decrement, increment } from '../store/actions';

import { AppState, selectCounterState } from '../store/app.states';
import { CounterEffects } from '../store/effects';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnDestroy {
  count$: Observable<number>;

  private readonly internalSubscriptions = new Subscription();

  constructor(
    private readonly store: Store<AppState>,
    private injector: Injector
  ) {
    const counterEffects = injector.get(CounterEffects);
    this.internalSubscriptions.add(
      counterEffects.increment$.subscribe()
    );

    this.count$ = store.pipe(
      select(selectCounterState),
      map((state: any) => state.counter));
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  ngOnDestroy(): void {
    this.internalSubscriptions.unsubscribe();
  }
}
