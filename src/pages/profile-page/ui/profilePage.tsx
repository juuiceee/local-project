import {
  DynamicModuleLoader,
  TReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamicModuleLoader';
import { memo } from 'react';
import { profileReducer } from '../../../entities/profile';

const initialReducers: TReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => (
  <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
    <div>
      <p>+</p>
    </div>
  </DynamicModuleLoader>
));

export default ProfilePage;
