import { classNames } from 'shared/lib/class-names/classNames';
import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/button/button';
import { Input } from 'shared/ui/input/input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, ETextTheme } from 'shared/ui/text/text';
import {
  loginActions,
  loginReducer,
} from 'features/auth-by-username/model/slices/loginSlice';
import {
  DynamicModuleLoader,
  TReducersList,
} from 'shared/lib/components/dynamic-module-loader/dynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { TThunkExtraArg } from 'app/providers/store-provider';
import { TUser } from 'entities/user';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import styles from './loginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

type TLoginFormProps = {
  className?: string;
  onSuccess: () => void;
};

const initialReducers: TReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: TLoginFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

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

  const handleLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
