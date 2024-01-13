import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';
import { validateProfile } from './validateProfile';
import { EValidateProfileError } from '../../types/profile';

const data = {
  username: 'admin',
  age: 21,
  city: 'Moscow',
  country: ECountry.RU,
  currency: ECurrency.RUB,
  name: 'Ivan',
  surname: 'Ivanov',
};

describe('validateProfile', () => {
  test('success validate', () => {
    const result = validateProfile(data);

    expect(result).toEqual([]);
  });

  test('error name and surname', () => {
    const result = validateProfile({ ...data, name: '', surname: '' });

    expect(result).toEqual([EValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('error profile', () => {
    const result = validateProfile();

    expect(result).toEqual([EValidateProfileError.NO_DATA]);
  });

  test('error age', () => {
    const result = validateProfile({ ...data, age: undefined });

    expect(result).toEqual([EValidateProfileError.INCORRECT_AGE]);
  });

  test('error country', () => {
    const result = validateProfile({ ...data, country: undefined });

    expect(result).toEqual([EValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('error all', () => {
    const result = validateProfile({});

    expect(result).toEqual([
      EValidateProfileError.INCORRECT_USER_DATA,
      EValidateProfileError.INCORRECT_AGE,
      EValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
