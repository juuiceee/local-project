import { TStateSchema } from 'app/providers/store-provider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should return profile readonly', () => {
    const state: DeepPartial<TStateSchema> = {
      profile: { readonly: false },
    };
    const result = getProfileReadonly(state as TStateSchema);

    expect(result).toEqual(false);
  });

  test('should work with empty', () => {
    const state: DeepPartial<TStateSchema> = {};
    const result = getProfileReadonly(state as TStateSchema);

    expect(result).toEqual(false);
  });
});
