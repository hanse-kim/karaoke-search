import {createGlobalStyle} from 'styled-components';
import {cssReset} from './cssReset';
import {cssVariables} from './cssVariables';

const GlobalStyle = createGlobalStyle`
  ${cssReset};
  ${cssVariables};

  html {
    font-family: AppleSDGothicNeo, 'Noto Sans KR', sans-serif;
    font-size: 16px;
  }

  body {
    color: var(--color-black);
    background-color: var(--color-main-bg);
  }

  @media screen and (max-width: 767px) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
