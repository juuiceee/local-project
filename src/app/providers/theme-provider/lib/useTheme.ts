import { useContext } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './themeContext';

type TUseThemeResult = {
  theme: ETheme;
  toggleTheme: () => void;
};

export function useTheme(): TUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: ETheme;

    switch (theme) {
    case ETheme.LIGHT:
      newTheme = ETheme.DARK;
      break;
    case ETheme.DARK:
      newTheme = ETheme.BLUE;
      break;
    case ETheme.BLUE:
      newTheme = ETheme.LIGHT;
      break;
    default:
      newTheme = ETheme.LIGHT;
    }

    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme?.(newTheme);
  };

  return {
    theme: theme || ETheme.LIGHT,
    toggleTheme,
  };
}
