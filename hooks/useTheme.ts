import {useMemo} from 'react';
import {themeDark, themeDefault} from 'styles/theme';
import useMediaQuery from './useMediaQuery';

const QUERY_CHECK_DARK_MODE = '(prefers-color-scheme: dark)';

const useTheme = () => {
  const {matches: isDarkMode} = useMediaQuery(QUERY_CHECK_DARK_MODE);
  const theme = useMemo(
    () => (isDarkMode ? themeDark : themeDefault),
    [isDarkMode]
  );

  return {theme};
};

export default useTheme;
