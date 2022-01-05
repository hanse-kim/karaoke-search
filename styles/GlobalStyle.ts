import {ThemeProps} from 'components/_common/styles';
import {createGlobalStyle} from 'styled-components';
import {fontSize} from './units';

const GlobalStyle = createGlobalStyle<ThemeProps>`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: AppleSDGothicNeo, 'Noto Sans KR', sans-serif;
    background: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.black};
    font-size: ${fontSize.md};
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  :focus {
    outline: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
