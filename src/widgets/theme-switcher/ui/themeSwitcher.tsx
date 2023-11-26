import { useTheme } from 'app/providers/theme-provider';
import styles from './themeSwitcher.module.scss';
import { classNames } from 'shared/lib/helpers/class-names/class-names';
import LightThemeIcon from 'shared/assets/light-theme-icon.svg';
import DarkThemeIcon from 'shared/assets/dark-theme-icon.svg';
import { ETheme } from 'app/providers/theme-provider';
import { Button, EButtonTheme } from 'shared/ui/button/button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
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
};
