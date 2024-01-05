import { DeepPartial } from '@reduxjs/toolkit';
import { TStateSchema } from 'app/providers/store-provider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return password', () => {
    const state: DeepPartial<TStateSchema> = {
      login: { password: '123' },
    };
    const result = getLoginPassword(state as TStateSchema);

    expect(result).toEqual('123');
  });

  test('should work with empty', () => {
    const state: DeepPartial<TStateSchema> = {};
    const result = getLoginPassword(state as TStateSchema);

    expect(result).toEqual('');
  });
});
