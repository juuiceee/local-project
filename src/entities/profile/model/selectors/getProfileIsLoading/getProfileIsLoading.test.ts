import { TStateSchema } from 'app/providers/store-provider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should return profile loading', () => {
    const state: DeepPartial<TStateSchema> = {
      profile: { isLoading: true },
    };
    const result = getProfileIsLoading(state as TStateSchema);

    expect(result).toEqual(true);
  });

  test('should work with empty', () => {
    const state: DeepPartial<TStateSchema> = {};
    const result = getProfileIsLoading(state as TStateSchema);

    expect(result).toEqual(false);
  });
});
