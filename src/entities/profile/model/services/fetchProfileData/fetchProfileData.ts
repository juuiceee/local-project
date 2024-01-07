import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkConfig } from 'app/providers/store-provider';
import { TProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  TProfile,
  void,
  TThunkConfig<string>
>(
  'profile/fetchProfileData',
  async (_, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<TProfile>('/profile');

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error_login');
    }
  },
);
