import { FC, useMemo, useState } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './theme-context';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT;

const ThemeProvider: FC = (props) => {
  const [theme, setTheme] = useState<ETheme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
