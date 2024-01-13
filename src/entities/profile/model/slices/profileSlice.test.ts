import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { EValidateProfileError, TProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'admin',
  age: 21,
  city: 'Moscow',
  country: ECountry.RU,
  currency: ECurrency.RUB,
  name: 'Ivan',
  surname: 'Ivanov',
};

describe('profileSlice', () => {
  test('setReadOnly', () => {
    const state: DeepPartial<TProfileSchema> = {
      readonly: false,
    };

    expect(
      profileReducer(state as TProfileSchema, profileActions.setReadOnly(true)),
    ).toEqual({
      readonly: true,
    });
  });

  test('updateProfile', () => {
    const state: DeepPartial<TProfileSchema> = {
      form: {
        username: 'admin',
      },
    };

    expect(
      profileReducer(
        state as TProfileSchema,
        profileActions.updateProfile({ username: '123' }),
      ),
    ).toEqual({
      form: {
        username: '123',
      },
    });
  });

  test('cancelEdit', () => {
    const state: DeepPartial<TProfileSchema> = {
      readonly: false,
      validateErrors: [EValidateProfileError.INCORRECT_AGE],
      form: {
        username: 'admin',
      },
      data: {
        username: '123',
      },
    };

    expect(
      profileReducer(state as TProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      form: {
        username: '123',
      },
      data: {
        username: '123',
      },
    });
  });

  test('updateProfile service pending', () => {
    const state: DeepPartial<TProfileSchema> = {
      isLoading: false,
      validateErrors: [EValidateProfileError.INCORRECT_AGE],
    };

    expect(
      profileReducer(state as TProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('updateProfile service fulfilled', () => {
    const state: DeepPartial<TProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as TProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
