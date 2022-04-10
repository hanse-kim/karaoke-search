import styled from 'styled-components';

export const PageNav = styled.nav<{spacing?: string}>`
  display: flex;
  margin: 0 auto;
  align-items: center;
  column-gap: ${(props) => props.spacing || ''};
`;
