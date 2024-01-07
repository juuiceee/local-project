import { TStateSchema } from 'app/providers/store-provider';

export const getProfileData = (state: TStateSchema) => state.profile?.data;
