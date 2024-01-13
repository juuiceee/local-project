import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';

export enum EValidateProfileError {
  INCORRECT_USER_DATA = ' INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export type TProfile = {
  name?: string;
  surname?: string;
  age?: number;
  currency?: ECurrency;
  country?: ECountry;
  city?: string;
  username?: string;
  avatar?: string;
};

export type TProfileSchema = {
  data?: TProfile;
  form?: TProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: Array<EValidateProfileError>;
};
