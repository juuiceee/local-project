import { createContext } from 'react';

export enum ETheme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  BLUE = 'app_blue_theme',
}

type TThemeContextProps = {
  theme?: ETheme;
  setTheme?: (theme: ETheme) => void;
};

export const ThemeContext = createContext<TThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
