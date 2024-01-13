import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkConfig } from 'app/providers/store-provider';
import { EValidateProfileError, TProfile } from '../../types/profile';
import { profileActions } from '../../slices/profileSlice';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfile } from '../validateProfile/validateProfile';

export const updateProfileData = createAsyncThunk<
  TProfile,
  void,
  TThunkConfig<Array<EValidateProfileError>>
>(
  'profile/updateProfileData',
  async (_, { dispatch, extra, rejectWithValue, getState }) => {
    try {
      const formData = getProfileForm(getState());

      const validateErrors = validateProfile(formData);

      if (validateErrors.length) {
        return rejectWithValue(validateErrors);
      }

      const response = await extra.api.put<TProfile>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      dispatch(profileActions.updateProfile(response.data));

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue([EValidateProfileError.SERVER_ERROR]);
    }
  },
);
