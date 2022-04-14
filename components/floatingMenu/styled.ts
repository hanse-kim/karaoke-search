import styled, { css } from "styled-components";

export const FloatingMenu = styled.nav`
  position: fixed;
  right: 56px;
  bottom: 48px;
  display: flex;
  column-gap: 12px;
  padding: 12px;
  border-radius: var(--radius-full);
  box-shadow: 0 2px 8px var(--color-shadow-strong);
  background-color: var(--color-floating-bg);
  z-index: var(--z-index-floating);
`;

export const FloatingMenuButton = styled.button`
  background-color: var(--color-floating-button);
  color: var(--color-floating-button-content);
  border: none;
  border-radius: var(--radius-full);
  position: static;
  display: flex;
  justify-content: center;
  align-items:center;
  width: 48px;
  height: 48px;
  cursor: pointer;
  box-shadow: 0 0 4px var(--color-shadow-strong);
`;

const themeButtonInnerStyle = css`
  display: inline-flex;
  position: absolute;
  transform: scale(1);
  transition: transform 0.2s;
`;

export const LightButtonInner = styled.span`
  ${themeButtonInnerStyle};

  [data-theme="dark"] & {
    transform: scale(0);
  }
`;

export const DarkButtonInner = styled.span`
  ${themeButtonInnerStyle}

  [data-theme="light"] & {
    transform: scale(0);
  }
`;