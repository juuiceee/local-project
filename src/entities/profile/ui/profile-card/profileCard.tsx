import { TMods, classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import { ETextAlign, ETextTheme, Text } from 'shared/ui/text/text';
import { Input } from 'shared/ui/input/input';
import { Loader } from 'shared/ui/loader/loader';
import { Avatar } from 'shared/ui/avatar/avatar';
import { CurrencySelect, ECurrency } from '../../../../entities/currency';
import styles from './profileCard.module.scss';
import { TProfile } from '../../model/types/profile';
import { CountrySelect, ECountry } from '../../../../entities/country';

type TProfileCardProps = {
  className?: string;
  data?: TProfile;
  error?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  onChangeName?: (name: string) => void;
  onChangeSurname?: (surname: string) => void;
  onChangeAge?: (age: string) => void;
  onChangeCity?: (city: string) => void;
  onChangeAvatar?: (avatar: string) => void;
  onChangeUsername?: (username: string) => void;
  onChangeCurrency?: (currency: ECurrency) => void;
  onChangeCountry?: (currency: ECountry) => void;
};

export const ProfileCard = ({
  className,
  data,
  error,
  isLoading,
  readOnly,
  onChangeName,
  onChangeSurname,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
  onChangeCurrency,
  onChangeCountry,
}: TProfileCardProps) => {
  const { t } = useTranslation();

  const mods: TMods = {
    [styles.editing]: !readOnly,
  };

  if (isLoading) {
    return (
      <div
        className={classNames(styles.profileCard, [className], {
          [styles.loading]: true,
        })}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(styles.profileCard, [className, styles.error], {
          [styles.loading]: true,
        })}
      >
        <Text
          align={ETextAlign.CENTER}
          title={t(error)}
          text={t('profile_fetch_error_text')}
          theme={ETextTheme.ERROR}
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.profileCard, [className], mods)}>
      <div>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} alt={data?.username} size={100} />
          </div>
        )}
        <Input
          value={data?.name}
          placeholder={t('profile_placeholder_name')}
          className={styles.input}
          readOnly={readOnly}
          onChange={onChangeName}
        />
        <Input
          value={data?.surname}
          placeholder={t('profile_placeholder_surname')}
          className={styles.input}
          readOnly={readOnly}
          onChange={onChangeSurname}
        />
        <Input
          value={String(data?.age)}
          placeholder={t('profile_placeholder_age')}
          className={styles.input}
          readOnly={readOnly}
          onChange={onChangeAge}
          type="number"
        />
        <Input
          value={data?.city}
          placeholder={t('profile_placeholder_city')}
          className={styles.input}
          readOnly={readOnly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder={t('profile_placeholder_username')}
          className={styles.input}
          readOnly={readOnly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar}
          placeholder={t('profile_placeholder_avatar')}
          className={styles.input}
          readOnly={readOnly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={styles.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readOnly={readOnly}
        />
        <CountrySelect
          className={styles.input}
          value={data?.country}
          onChange={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};
