import { ECountry, ECurrency } from 'shared/const/common';

export type TProfile = {
  name: string;
  surname: string;
  age: number;
  currency: ECurrency;
  country: ECountry;
  city: string;
  username: string;
  avatar: string;
};

export type TProfileSchema = {
  data?: TProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
};
