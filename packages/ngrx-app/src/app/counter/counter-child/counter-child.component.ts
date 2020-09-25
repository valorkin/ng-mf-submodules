import { Component } from '@angular/core';
import { select, Store, StoreModule } from '@ngrx/store';
import { AppState, reducers, selectCounterState } from '../../store/app.states';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  providers: [
    StoreModule.forFeature('counter', reducers.counter).providers
  ],
  // styleUrls: ['./counter-child.component.css']
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
