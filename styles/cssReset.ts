import {css} from 'styled-components';

export const cssReset = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.55;
    -webkit-text-size-adjust: 100%;
  }

  *,
  :after,
  :before {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul,
  p,
  pre,
  blockquote {
    margin: 0;
    padding: 0;
    font-weight: inherit;
  }

  main {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    border-style: none;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  a {
    background-color: transparent;
    color: inherit;
    outline: 0;
  }

  a,
  a:active,
  a:hover {
    text-decoration: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
  }
`;
