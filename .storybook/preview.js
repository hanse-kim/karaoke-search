import useTheme from 'hooks/useTheme';
import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const {theme} = useTheme();

    return (
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </RecoilRoot>
    );
  },
];
