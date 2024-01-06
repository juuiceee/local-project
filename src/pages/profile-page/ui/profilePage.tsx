import { classNames } from 'shared/lib/class-names/classNames';
import {
  DynamicModuleLoader,
  TReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamicModuleLoader';
import { memo } from 'react';
import { profileReducer } from '../../../entities/profile';
import styles from './profilePage.module.scss';

type TProfilePageProps = {
  className?: string;
};

const initialReducers: TReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo((props: TProfilePageProps) => {
  const { className } = props;
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles.profilePage, [className])}>
        <p>+</p>
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
