import {createGlobalStyle} from 'styled-components';
import type {Theme} from './theme';

interface Props {
  theme: Theme;
}

const GlobalStyle = createGlobalStyle((props: Props) => ({
  html: {
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: `'Noto Sans KR', sans-serif`,
    background: props.theme.color.white,
    color: props.theme.color.black,
  },

  '*': {
    margin: 0,
    boxSizing: 'border-box',
  },

  'body, h1, h2, h3, h4, h5, h6, p, ol, ul': {
    margin: 0,
    padding: 0,
    fontWeight: 'normal',
  },

  'ol, ul': {
    listStyle: 'none',
  },

  ':focus': {
    outline: 0,
  },
}));

export default GlobalStyle;
