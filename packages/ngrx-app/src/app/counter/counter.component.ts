import { Component, Injector, OnDestroy } from '@angular/core';
import { select, Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import { AppState, reducers, selectCounterState } from '../store/app.states';
import { decrement, increment } from '../store/actions';
import { CounterEffects } from '../store/effects';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    StoreModule.forRoot(reducers, {}).providers,
    EffectsModule.forRoot([CounterEffects]).providers
  ]
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

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  ngOnDestroy(): void {
    this.internalSubscriptions.unsubscribe();
  }
}
