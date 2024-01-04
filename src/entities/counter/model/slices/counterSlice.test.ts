import { TCounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('decrement', () => {
    const state: TCounterSchema = {
      value: 7,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 6,
    });
  });

  test('increment', () => {
    const state: TCounterSchema = {
      value: 7,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 8,
    });
  });

  test('should work with empty store', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
