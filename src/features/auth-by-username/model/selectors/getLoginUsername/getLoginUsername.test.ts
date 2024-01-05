import { DeepPartial } from '@reduxjs/toolkit';
import { TStateSchema } from 'app/providers/store-provider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return username', () => {
    const state: DeepPartial<TStateSchema> = {
      login: { username: 'admin' },
    };
    const result = getLoginUsername(state as TStateSchema);

    expect(result).toEqual('admin');
  });

  test('should work with empty', () => {
    const state: DeepPartial<TStateSchema> = {};
    const result = getLoginUsername(state as TStateSchema);

    expect(result).toEqual('');
  });
});
