import { TProfile, TProfileSchema } from './model/types/profile';
import { profileActions, profileReducer } from './model/slices/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/profile-card/profileCard';

export {
  TProfile,
  TProfileSchema,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
};
