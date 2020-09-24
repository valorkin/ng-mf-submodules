import { createAction } from '@ngrx/store';

export enum CounterActionTypes {
  INCREMENT = '[Counter Component] Increment',
  DECREMENT = '[Counter Component] Decrement',
}

export const increment = createAction(CounterActionTypes.INCREMENT);
export const decrement = createAction(CounterActionTypes.DECREMENT);
