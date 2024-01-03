import { FC, useMemo, useState } from 'react';
import {
  ETheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from '../lib/themeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT;

interface IThemeProviderProps {
  initialTheme?: ETheme;
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<ETheme>(initialTheme ?? defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
