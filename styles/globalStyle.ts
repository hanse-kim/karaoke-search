import {createGlobalStyle} from 'styled-components';
import {cssReset} from './cssReset';
import {cssVariables} from './cssVariables';

const GlobalStyle = createGlobalStyle`
  ${cssReset};
  ${cssVariables};

  body {
    font-family: AppleSDGothicNeo, 'Noto Sans KR', sans-serif;
    font-size: 16px;
    color: var(--color-black);
    background-color: var(--color-main-bg);
  }
`;

export default GlobalStyle;
