import { TStateSchema } from 'app/providers/store-provider';

export const getProfileReadonly = (state: TStateSchema) =>
  state.profile?.readonly || false;
