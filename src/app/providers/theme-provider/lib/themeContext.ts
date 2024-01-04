import { createContext } from 'react';

export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
}

type TThemeContextProps = {
  theme?: ETheme;
  setTheme?: (theme: ETheme) => void;
};

export const ThemeContext = createContext<TThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
