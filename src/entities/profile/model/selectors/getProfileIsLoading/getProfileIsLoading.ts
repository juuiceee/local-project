import { TStateSchema } from 'app/providers/store-provider';

export const getProfileIsLoading = (state: TStateSchema) => state.profile?.isLoading || false;
