import { TStateSchema } from 'app/providers/store-provider';
import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return profile form', () => {
    const state: DeepPartial<TStateSchema> = {
      profile: {
        form: {
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
    const result = getProfileForm(state as TStateSchema);

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
    const result = getProfileForm(state as TStateSchema);

    expect(result).toEqual(undefined);
  });
});
