import { TStateSchema } from 'app/providers/store-provider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { EValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors', () => {
  test('should return profile validate errors', () => {
    const state: DeepPartial<TStateSchema> = {
      profile: {
        validateErrors: [
          EValidateProfileError.INCORRECT_AGE,
          EValidateProfileError.NO_DATA,
        ],
      },
    };
    const result = getProfileValidateErrors(state as TStateSchema);

    expect(result).toEqual([
      EValidateProfileError.INCORRECT_AGE,
      EValidateProfileError.NO_DATA,
    ]);
  });

  test('should work with empty', () => {
    const state: DeepPartial<TStateSchema> = {};
    const result = getProfileValidateErrors(state as TStateSchema);

    expect(result).toEqual([]);
  });
});
