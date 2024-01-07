import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/text/text';
import { Button, EButtonTheme } from 'shared/ui/button/button';
import { Input } from 'shared/ui/input/input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import styles from './profileCard.module.scss';

type TProfileCardProps = {
  className?: string;
};

export const ProfileCard = ({ className }: TProfileCardProps) => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(styles.profileCard, [className])}>
      <div className={styles.header}>
        <Text title={t('profile_title')} />
        <Button theme={EButtonTheme.OUTLINE} className={styles.editBtn}>
          {t('profile_edit')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.name}
          placeholder={t('profile_placeholder_name')}
          className={styles.input}
        />
        <Input
          value={data?.surname}
          placeholder={t('profile_placeholder_surname')}
          className={styles.input}
        />
      </div>
    </div>
  );
};
