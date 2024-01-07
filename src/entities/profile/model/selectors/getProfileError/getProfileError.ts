import { TStateSchema } from 'app/providers/store-provider';

export const getProfileError = (state: TStateSchema) => state.profile?.error;
