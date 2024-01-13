import { TStateSchema } from 'app/providers/store-provider';
import { ECurrency } from 'entities/currency';
import { ECountry } from 'entities/country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return profile data', () => {
    const state: DeepPartial<TStateSchema> = {
      profile: {
        data: {
          username: 'admin',
          age: 21,
          city: 'Moscow',
          country: ECountry.RU,
          currency: ECurrency.RUB,
          name: 'Ivan',
          surname: 'Ivanov',
        },
      },
    };
    const result = getProfileData(state as TStateSchema);

    expect(result).toEqual({
      username: 'admin',
      age: 21,
      city: 'Moscow',
      country: ECountry.RU,
      currency: ECurrency.RUB,
      name: 'Ivan',
      surname: 'Ivanov',
    });
  });

  test('should work with empty', () => {
    const state: DeepPartial<TStateSchema> = {};
    const result = getProfileData(state as TStateSchema);

    expect(result).toEqual(undefined);
  });
});
