import styled from 'styled-components';

export const LogoWrapper = styled.a<{isHome?: boolean}>`
  color: ${(props) =>
    props.isHome ? 'var(--color-home-logo)' : 'var(--color-logo)'};
  display: flex;
`;
