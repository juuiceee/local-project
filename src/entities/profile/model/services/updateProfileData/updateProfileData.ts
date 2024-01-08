import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkConfig } from 'app/providers/store-provider';
import { TProfile } from '../../types/profile';
import { profileActions } from '../../slices/profileSlice';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  TProfile,
  void,
  TThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, { dispatch, extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState());

      const response = await extra.api.put<TProfile>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      dispatch(profileActions.updateProfile(response.data));

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('profile_update_error');
    }
  },
);
