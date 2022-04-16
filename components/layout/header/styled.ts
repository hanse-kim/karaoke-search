import styled from 'styled-components';

export const Header = styled.header`
  height: 50px;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 8px 0 var(--color-shadow-strong);

  transition: height 300ms, background-color 300ms;
  background-color: var(--color-header-bg);

  &[data-is-home='true'] {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: var(--color-home-bg);
    padding-bottom: var(--footer-height);
  }
`;

export const HeaderInner = styled.div`
  width: var(--screen-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: flex-direction 300ms;

  &[data-is-home='true'] {
    flex-direction: column;
    justify-content: center;
    row-gap: 3rem;
  }
`;
