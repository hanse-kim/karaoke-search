import styled from 'styled-components';

export const RippleButtonWrapper = styled.button`
  position: relative;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: var(--radius-full);
    width: 0;
    height: 0;

    transition: background-color 0.2s;
  }

  &::after {
    transition: width 0.2s, height 0.2s;
  }

  &:hover {
    cursor: pointer;
    &::before {
      width: 140%;
      height: 140%;
      background-color: rgba(0, 0, 0, 0.03);
    }
  }

  &:active {
    &::after {
      width: 140%;
      height: 140%;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;
