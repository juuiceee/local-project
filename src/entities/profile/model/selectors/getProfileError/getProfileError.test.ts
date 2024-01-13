import { TStateSchema } from 'app/providers/store-provider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return profile error', () => {
    const state: DeepPartial<TStateSchema> = {
      profile: { error: 'some error' },
    };
    const result = getProfileError(state as TStateSchema);

    expect(result).toEqual('some error');
  });

  test('should work with empty', () => {
    const state: DeepPartial<TStateSchema> = {};
    const result = getProfileError(state as TStateSchema);

    expect(result).toEqual(undefined);
  });
});
