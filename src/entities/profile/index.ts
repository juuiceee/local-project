import { TProfile, TProfileSchema } from './model/types/profile';
import { profileActions, profileReducer } from './model/slices/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';
import { ProfileCard } from './ui/profile-card/profileCard';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';

export {
  TProfile,
  TProfileSchema,
  profileActions,
  profileReducer,
  fetchProfileData,
  updateProfileData,
  ProfileCard,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileForm,
};
