import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TProfile, TProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: TProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<TProfile>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<TProfile>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
