import { TStateSchema } from 'app/providers/store-provider';

export const getProfileValidateErrors = (state: TStateSchema) =>
  state.profile?.validateErrors || [];
