import { useTheme, ETheme } from 'app/providers/theme-provider';
import { classNames } from 'shared/lib/class-names/classNames';
import LightThemeIcon from 'shared/assets/lightThemeIcon.svg';
import DarkThemeIcon from 'shared/assets/darkThemeIcon.svg';
import { memo } from 'react';
import { Button, EButtonTheme } from 'shared/ui/button/button';
import styles from './themeSwitcher.module.scss';

type TThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher = memo(({ className }: TThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={EButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames(styles.themeSwitcher, [className])}
    >
      {theme === ETheme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  );
});
