import { EValidateProfileError, TProfile } from '../../types/profile';

export const validateProfile = (
  profile?: TProfile,
): Array<EValidateProfileError> => {
  if (!profile) return [EValidateProfileError.NO_DATA];

  const { name, surname, country, age } = profile;

  const errors: Array<EValidateProfileError> = [];

  if (!name || !surname) {
    errors.push(EValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number(age)) {
    errors.push(EValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(EValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
