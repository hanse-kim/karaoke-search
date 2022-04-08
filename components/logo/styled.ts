import styled from 'styled-components';

export const Logo = styled.a<{isHome?: boolean}>`
  color: var(--color-logo);
  display: flex;

  &[data-is-home='true'] {
    color: var(--color-home-logo);
  }
`;
