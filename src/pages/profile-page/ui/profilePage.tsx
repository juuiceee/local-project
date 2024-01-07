import {
  DynamicModuleLoader,
  TReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
} from '../../../entities/profile';

const initialReducers: TReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
