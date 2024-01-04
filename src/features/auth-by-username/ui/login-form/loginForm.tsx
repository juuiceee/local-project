import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/button/button';
import { Input } from 'shared/ui/input/input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, ETextTheme } from 'shared/ui/text/text';
import { loginActions } from 'features/auth-by-username/model/slices/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './loginForm.module.scss';

type TLoginFormProps = {
  className?: string;
};

export const LoginForm = memo(({ className }: TLoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const handleLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(styles.loginForm, [className])}>
      <Text title={t('login_form_title')} />
      {error && (
        <Text
          className={styles.error}
          text={t('error_login')}
          theme={ETextTheme.ERROR}
        />
      )}
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
      <Button
        onClick={handleLoginClick}
        theme={EButtonTheme.OUTLINE}
        className={styles.loginBtn}
        disabled={isLoading}
      >
        {t('login')}
      </Button>
    </div>
  );
});
