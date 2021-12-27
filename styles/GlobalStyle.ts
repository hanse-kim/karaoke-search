import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle({
  html: {
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: `'Noto Sans KR', sans-serif`,
  },

  '*': {
    margin: 0,
  },

  'body, h1, h2, h3, h4, h5, h6, p, ol, ul': {
    margin: 0,
    padding: 0,
    fontWeight: 'normal',
  },

  'ol, ul': {
    listStyle: 'none',
  },
});

export default GlobalStyle;
