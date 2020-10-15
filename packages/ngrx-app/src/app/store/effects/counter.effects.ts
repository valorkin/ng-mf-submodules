import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CounterActionTypes } from '../actions';
import { Action } from '@ngrx/store';

@Injectable()
export class CounterEffects {
  constructor(
    private readonly actions: Actions
  ) {
  }

  @Effect({dispatch: false})
  increment$: Observable<Action> =
    this.actions.pipe(
      ofType(CounterActionTypes.INCREMENT),
      tap(() => console.log('Increment$ Effect works!'))
    );
}
