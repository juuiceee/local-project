import { TStateSchema } from 'app/providers/store-provider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return login', () => {
    const state: DeepPartial<TStateSchema> = {
      login: {
        username: 'admin',
        password: 'admin',
        error: 'error',
        isLoading: true,
      },
    };
    const result = getLoginState(state as TStateSchema);

    expect(result).toEqual({
      username: 'admin',
      password: 'admin',
      error: 'error',
      isLoading: true,
    });
  });
});
