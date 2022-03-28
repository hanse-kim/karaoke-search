import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import useTheme from 'hooks/useTheme';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import {Layout} from 'views/layout';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

function MyApp({Component, pageProps, router}: AppProps) {
  const {theme} = useTheme();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>{process.env.NEXT_PUBLIC_TITLE}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <GlobalStyle />
        <Layout isHome={router.pathname === '/'}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
