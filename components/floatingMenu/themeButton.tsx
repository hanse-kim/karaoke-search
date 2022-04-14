import {useEffect} from 'react';
import {useStorageState} from 'hooks/useStorage';
import {FloatingMenuButton} from './button';
import * as Styled from './styled';
import IconLightSvg from 'public/assets/iconLight.svg';
import IconDarkSvg from 'public/assets/iconDark.svg';

type Theme = 'light' | 'dark';

export const ThemeButton = () => {
  const {theme, setTheme} = useTheme();

  return (
    <FloatingMenuButton
      onClick={() => {
        setTheme((prevTheme) => {
          const newTheme = prevTheme === 'light' ? 'dark' : 'light';
          document.body.dataset.theme = newTheme;
          return newTheme;
        });
      }}
    >
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
    'theme',
    'light'
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    updateTheme(theme);
  }, [theme, updateTheme]);

  return {theme, setTheme};
};
