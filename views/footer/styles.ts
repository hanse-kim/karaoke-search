import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: var(--footer-height);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.25rem;

  position: relative;
  z-index: var(--z-index-footer);

  color: var(--color-heading);

  &[data-is-home='true'] {
    color: var(--color-home-logo);
  }
`;

export const FooterLink = styled.a`
  text-decoration: underline;
  color: var(--color-heading);

  [data-is-home='true'] > & {
    color: var(--color-home-logo);
  }
`;