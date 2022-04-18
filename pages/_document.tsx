import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {
  INITIAL_THEME,
  STORAGE_KEY_THEME,
} from 'components/floatingMenu/themeButton';
// import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='icon' href='/favicon-48x48.png' />
          <link rel='apple-touch-icon' href='/favicon-192x192.png'></link>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <script
            id='initialize-theme'
            dangerouslySetInnerHTML={{
              __html: `document.body.dataset.theme = JSON.parse(localStorage.getItem("${STORAGE_KEY_THEME}") || '"${INITIAL_THEME}"');`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
