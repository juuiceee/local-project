import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';

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
};
