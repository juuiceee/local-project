import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/classNames';
import { Button } from 'shared/ui/button/button';
import { Input } from 'shared/ui/input/input';
import { useState } from 'react';
import styles from './loginForm.module.scss';

type TLoginFormProps = {
  className?: string;
};

export const LoginForm = ({ className }: TLoginFormProps) => {
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (value: string) => {
    setUsername(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  return (
    <div className={classNames(styles.loginForm, [className])}>
      <Input
        placeholder={t('username_placeholder')}
        className={styles.input}
        value={username}
        onChange={handleChangeUsername}
        autoFocus
      />
      <Input
        placeholder={t('password_placeholder')}
        className={styles.input}
        value={password}
        onChange={handleChangePassword}
      />
      <Button className={styles.loginBtn}>{t('login')}</Button>
    </div>
  );
};
