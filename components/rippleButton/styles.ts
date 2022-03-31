import styled from 'styled-components';

export const RippleButtonWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  border: none;
  background: none;

  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: var(--radius-full);
    transition-duration: 200ms;
  }

  &::before {
    width: 0;
    height: 0;
    background-color: rgba(0, 0, 0, 0.03);
    transition-property: width, height;
  }

  &::after {
    width: 140%;
    height: 140%;
    transition-property: background-color;
  }

  &:hover {
    &::before {
      width: 140%;
      height: 140%;
    }
  }

  &:active {
    &::after {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
`;
