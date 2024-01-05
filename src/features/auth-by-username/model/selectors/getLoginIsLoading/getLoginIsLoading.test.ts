import { DeepPartial } from '@reduxjs/toolkit';
import { TStateSchema } from 'app/providers/store-provider';
import { getLoginIsLoading } from '../getLoginIsLoading/getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<TStateSchema> = {
      login: { isLoading: true },
    };
    const result = getLoginIsLoading(state as TStateSchema);

    expect(result).toEqual(true);
  });

  test('should work with empty', () => {
    const state: DeepPartial<TStateSchema> = {};
    const result = getLoginIsLoading(state as TStateSchema);

    expect(result).toEqual(false);
  });
});
