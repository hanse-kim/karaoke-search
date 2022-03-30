import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 50px;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 15px 0 rgba(0 0 0 / 0.25);

  position: relative;
  z-index: var(--z-index-header);
  transition: height 0.3s, background-color 0.3s;

  &[data-is-home='true'] {
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: var(--color-main);
    padding-bottom: var(--footer-height);
  }
`;

export const HeaderInner = styled.div`
  width: var(--screen-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: flex-direction 0.3s;

  &[data-is-home='true'] {
    flex-direction: column;
    justify-content: center;
    row-gap: 3rem;
  }
`;
