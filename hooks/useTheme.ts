import {useCallback, useEffect, useMemo, useState} from 'react';
import {themeDark, themeDefault} from 'styles/theme';

const IS_DARK_MODE = 'is-dark-mode';

const useTheme = () => {
  const [isDarkMode, _setDarkMode] = useState(false);

  const setDarkMode = useCallback(
    (value: boolean) => {
      _setDarkMode(value);
      localStorage.setItem(IS_DARK_MODE, `${value}`);
    },
    [_setDarkMode]
  );

  useEffect(() => {
    const browserDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const localStorageDarkMode =
      localStorage.getItem(IS_DARK_MODE) === 'true' ? true : false;
    setDarkMode(browserDarkMode || localStorageDarkMode);
  }, [setDarkMode]);

  const theme = useMemo(
    () => (isDarkMode ? themeDark : themeDefault),
    [isDarkMode]
  );

  return {theme, setDarkMode};
};

export default useTheme;
