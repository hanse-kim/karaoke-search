import React from 'react';
import Head from 'next/head';
import type {AppProps} from 'next/app';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {SearchFilterProvider} from 'contexts/SearchFilterContext';
import {Layout} from 'components/layout';
import GlobalStyle from 'styles/GlobalStyle';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

function MyApp({Component, pageProps, router}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <GlobalStyle />
      <React.StrictMode>
        <SearchFilterProvider searchFilter={router.query}>
          <Layout isHome={router.pathname === '/'}>
            <Component {...pageProps} />
          </Layout>
        </SearchFilterProvider>
      </React.StrictMode>
    </ApolloProvider>
  );
}

export default MyApp;
