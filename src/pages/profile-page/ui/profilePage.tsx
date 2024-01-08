import {
  DynamicModuleLoader,
  TReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  getProfileForm,
} from '../../../entities/profile';
import { ProfilePageHeader } from './profilePageHeader/profilePageHeader';
import { ECurrency } from '../../../entities/currency';
import { ECountry } from '../../../entities/country';

const initialReducers: TReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readOnly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeName = useCallback(
    (name: string) => {
      dispatch(profileActions.updateProfile({ name }));
    },
    [dispatch],
  );

  const onChangeSurname = useCallback(
    (surname: string) => {
      dispatch(profileActions.updateProfile({ surname }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (age: string) => {
      dispatch(profileActions.updateProfile({ age: Number(age) }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (city: string) => {
      dispatch(profileActions.updateProfile({ city }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (avatar: string) => {
      dispatch(profileActions.updateProfile({ avatar }));
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (username: string) => {
      dispatch(profileActions.updateProfile({ username }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency: ECurrency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country: ECountry) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div>
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readOnly={readOnly}
          onChangeName={onChangeName}
          onChangeSurname={onChangeSurname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
