import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
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

function MyApp({Component, pageProps}: AppProps) {
  const {theme} = useTheme();

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
