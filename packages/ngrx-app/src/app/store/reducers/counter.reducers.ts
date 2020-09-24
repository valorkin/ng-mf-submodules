import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../actions';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0
};

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
  ),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    };
  })
);

export function reducer(state = initialState, action): State {
  return _counterReducer(state, action);
}
