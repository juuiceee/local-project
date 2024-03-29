import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkConfig } from 'app/providers/store-provider';
import { TProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  TProfile,
  void,
  TThunkConfig<string>
>('profile/fetchProfileData', async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<TProfile>('/profile');

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue('profile_fetch_error_title');
  }
});
