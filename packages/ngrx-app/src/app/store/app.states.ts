import {createFeatureSelector} from '@ngrx/store';
import * as counter from './reducers/counter.reducers';

/**
 * App state
 */
export interface AppState {
  counterState: counter.State;
}

/**
 * Reducers
 */
export const reducers = {
  counter: counter.reducer,
};

export const selectCounterState = createFeatureSelector<AppState>('counter');
