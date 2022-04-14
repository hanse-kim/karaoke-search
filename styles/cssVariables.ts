import {css} from 'styled-components';

export const cssVariables = css`
  :root {
    --color-main: #fcba3a;
    --color-black: #3d3c39;
    --color-dark-gray: #54534f;
    --color-gray: #d6d3c9;
    --color-light-gray: #faf9f8;
    --color-white: #ffffff;

    --color-main-hover: #fcb322;
    --color-main-active: #fbac0e;

    --color-white-hover: #fbfaf9;
    --color-white-active: #f7f5f3;

    --color-shadow-strong: rgba(61, 60, 57, 0.25);
    --color-shadow-normal: rgba(61, 60, 57, 0.2);
    --color-shadow-weak: rgba(61, 60, 57, 0.1);

    --font-size-heading: 1.75rem;
    --font-size-lg: 1.125rem;
    --font-size-md: 1rem;
    --font-size-sm: 0.875rem;

    --font-weight-light: 300;
    --font-weight-regular: 400;

    --radius-md: 0.25rem;
    --radius-lg: 0.5rem;
    --radius-full: 9999px;

    --screen-width: 640px;
    --footer-height: 160px;

    --z-index-base: 0;
    --z-index-header: 100;
    --z-index-footer: 110;
    --z-index-floating: 200;
  }

  body[data-theme='light'] {
    --color-home-bg: var(--color-main);
    --color-home-logo: var(--color-white);

    --color-input-border: var(--color-main);
    --color-input-bg: var(--color-white);
    --color-input-content: var(--color-black);
    --color-input-label: var(--color-black);
    --color-input-placeholder: var(--color-gray);

    --color-floating-bg: var(--color-white);
    --color-floating-button: var(--color-main);
    --color-floating-button-content: var(--color-white);

    --color-toast-bg: var(--color-main);
    --color-toast-content: var(--color-white);

    --color-header-bg: var(--color-white);
    --color-logo: var(--color-main);
    --color-main-bg: var(--color-light-gray);
    --color-heading: var(--color-black);

    --color-list-item-bg: var(--color-white);
    --color-list-item-content: var(--color-black);
    --color-list-item-content-sub: var(--color-dark-gray);
    --color-bookmark: var(--color-main);
    --color-bookmark-empty: var(--color-white);

    --color-button-bg: var(--color-white);
    --color-button-text: var(--color-black);
    --color-button-selected-bg: var(--color-main);
    --color-button-selected-text: var(--color-white);
  }

  body[data-theme='dark'] {
    --color-home-bg: var(--color-dark-gray);
    --color-home-logo: var(--color-main);

    --color-input-border: var(--color-main);
    --color-input-bg: var(--color-main);
    --color-input-content: var(--color-black);
    --color-input-label: var(--color-white);
    --color-input-placeholer: var(--color-dark-gray);

    --color-floating-bg: var(--color-main);
    --color-floating-button: var(--color-dark-gray);
    --color-floating-button-content: var(--color-main);

    --color-toast-bg: var(--color-main);
    --color-toast-content: var(--color-black);

    --color-header-bg: var(--color-black);
    --color-logo: var(--color-main);
    --color-main-bg: var(--color-dark-gray);
    --color-heading: var(--color-main);

    --color-list-item-bg: var(--color-main);
    --color-list-item-content: var(--color-black);
    --color-list-item-content-sub: var(--color-dark-gray);
    --color-bookmark: var(--color-white);
    --color-bookmark-empty: var(--color-dark-gray);

    --color-button-bg: var(--color-black);
    --color-button-text: var(--color-white);
    --color-button-selected-bg: var(--color-main);
    --color-button-selected-text: var(--color-black);
  }
`;
