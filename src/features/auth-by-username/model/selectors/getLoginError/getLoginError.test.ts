import { TStateSchema } from 'app/providers/store-provider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error', () => {
    const state: DeepPartial<TStateSchema> = {
      login: { error: 'error' },
    };
    const result = getLoginError(state as TStateSchema);

    expect(result).toEqual('error');
  });

  test('should work with empty', () => {
    const state: DeepPartial<TStateSchema> = {};
    const result = getLoginError(state as TStateSchema);

    expect(result).toEqual(undefined);
  });
});
