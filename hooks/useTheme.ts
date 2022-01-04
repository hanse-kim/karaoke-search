import {useEffect, useMemo, useState} from 'react';
import {themeDark, themeDefault} from 'styles/theme';

const useTheme = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const browserDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setDarkMode(browserDarkMode);
  }, []);

  const theme = useMemo(
    () => (isDarkMode ? themeDark : themeDefault),
    [isDarkMode]
  );

  return {theme};
};

export default useTheme;
