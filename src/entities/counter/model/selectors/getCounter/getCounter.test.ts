import { DeepPartial } from '@reduxjs/toolkit';
import { TStateSchema } from 'app/providers/store-provider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<TStateSchema> = {
      counter: { value: 7 },
    };
    const result = getCounter(state as TStateSchema);

    expect(result).toEqual({ value: 7 });
  });
});
