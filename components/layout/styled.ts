import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    & {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;
