import { classNames } from 'shared/lib/class-names/classNames';
import { Text } from 'shared/ui/text/text';
import { Button, EButtonTheme } from 'shared/ui/button/button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from '../../../../entities/profile';
import styles from './profilePageHeader.module.scss';

type TProfilePageHeaderProps = {
  className?: string;
};

export const ProfilePageHeader = ({ className }: TProfilePageHeaderProps) => {
  const { t } = useTranslation();

  const readOnly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.profilePageHeader, [className])}>
      <Text title={t('profile_title')} />
      {readOnly ? (
        <Button
          theme={EButtonTheme.OUTLINE}
          className={styles.editBtn}
          onClick={onEdit}
        >
          {t('profile_edit')}
        </Button>
      ) : (
        <>
          <Button
            theme={EButtonTheme.OUTLINE_RED}
            className={styles.editBtn}
            onClick={onCancelEdit}
          >
            {t('profile_cancel')}
          </Button>
          <Button
            theme={EButtonTheme.OUTLINE}
            className={styles.saveBtn}
            onClick={onSaveEdit}
          >
            {t('profile_save')}
          </Button>
        </>
      )}
    </div>
  );
};
