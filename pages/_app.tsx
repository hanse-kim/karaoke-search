import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import useImagePreload from 'hooks/useImagePreload';
import useTheme from 'hooks/useTheme';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

const imageSrcListToPreload = [
  '/assets/icon_heart_empty.svg',
  '/assets/icon_heart_empty_dark.svg',
  '/assets/icon_heart_filled.svg',
  '/assets/icon_heart_filled_dark.svg',
];

function MyApp({Component, pageProps}: AppProps) {
  const {theme} = useTheme();
  const {cacheImage} = useImagePreload();

  cacheImage(imageSrcListToPreload);

  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Head>
            <title>노래찾기</title>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
          </Head>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
