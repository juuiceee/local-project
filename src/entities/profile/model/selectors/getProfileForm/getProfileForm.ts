import { TStateSchema } from 'app/providers/store-provider';

export const getProfileForm = (state: TStateSchema) => state.profile?.form;
