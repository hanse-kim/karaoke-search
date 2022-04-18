import {useEffect} from 'react';
import {useStorageState} from 'hooks/useStorage';
import {FloatingMenuButton} from './button';
import * as Styled from './styled';
import IconLightSvg from 'public/assets/iconLight.svg';
import IconDarkSvg from 'public/assets/iconDark.svg';

type Theme = 'light' | 'dark';
export const STORAGE_KEY_THEME = 'theme';
export const INITIAL_THEME: Theme = 'light';

export const ThemeButton = () => {
  const {handleToggleTheme} = useTheme();

  return (
    <FloatingMenuButton onClick={handleToggleTheme}>
      <Styled.LightButtonInner>
        <IconLightSvg />
      </Styled.LightButtonInner>
      <Styled.DarkButtonInner>
        <IconDarkSvg />
      </Styled.DarkButtonInner>
    </FloatingMenuButton>
  );
};

const useTheme = () => {
  const [theme, setTheme, updateTheme] = useStorageState<Theme>(
    STORAGE_KEY_THEME,
    INITIAL_THEME
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
    updateTheme(theme);
  }, [theme, updateTheme]);

  const handleToggleTheme = () => {
    setTheme((currTheme) => {
      if (currTheme === 'dark') return 'light';
      if (currTheme === 'light') return 'dark';
      return INITIAL_THEME;
    });
  };

  return {handleToggleTheme};
};
