import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: var(--footer-height);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.25rem;

  color: var(--color-heading);

  &[data-is-home='true'] {
    color: var(--color-home-logo);
    position: static;
    z-index: var(--z-index-footer);
  }

  @media screen and (max-width: 767px) {
    & {
      padding-bottom: 60px;
    }
  }
`;

export const FooterLink = styled.a`
  text-decoration: underline;
  color: var(--color-heading);

  [data-is-home='true'] > & {
    color: var(--color-home-logo);
  }
`;
