import useTheme from 'hooks/useTheme';
import type {AppProps} from 'next/app';
import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

function MyApp({Component, pageProps}: AppProps) {
  const {theme} = useTheme();

  return (
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
  );
}

export default MyApp;
