import styled, {css} from 'styled-components';

export const FloatingMenu = styled.nav`
  position: fixed;
  right: 3.5rem;
  bottom: 3rem;
  display: flex;
  column-gap: 12px;
  padding: 12px;
  border-radius: var(--radius-full);
  box-shadow: 0 2px 8px var(--color-shadow-strong);
  background-color: var(--color-floating-bg);
  z-index: var(--z-index-floating);

  @media screen and (max-width: 767px) {
    & {
      right: 1rem;
      bottom: 1rem;
      column-gap: 0.5rem;
      padding: 0.5rem;
    }
  }
`;

export const FloatingMenuButton = styled.button`
  background-color: var(--color-floating-button);
  color: var(--color-floating-button-content);
  border: none;
  border-radius: var(--radius-full);
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
  box-shadow: 0 0 4px var(--color-shadow-strong);
  transition: background-color 200ms;

  & svg {
    transition: transform 200ms;
  }

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-floating-button-hover);
    }

    &:hover svg {
      transform: scale(120%);
    }

    &:active {
      background-color: var(--color-floating-button-active);
    }
  }

  @media screen and (max-width: 767px) {
    & {
      width: 36px;
      height: 36px;
    }
  }
`;

const themeButtonInnerStyle = css`
  display: inline-flex;
  position: absolute;
  transform: scale(1);
  transition: transform 200ms;
`;

export const LightButtonInner = styled.span`
  ${themeButtonInnerStyle};

  [data-theme='dark'] & {
    transform: scale(0);
  }
`;

export const DarkButtonInner = styled.span`
  ${themeButtonInnerStyle}

  [data-theme="light"] & {
    transform: scale(0);
  }
`;
