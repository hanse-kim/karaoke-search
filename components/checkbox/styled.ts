import styled, {keyframes} from 'styled-components';

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: var(--color-input-label);

  cursor: pointer;
`;

export const CheckboxController = styled.span`
  width: 20px;
  height: 20px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1px;

  border: 2px solid var(--color-input-border);
  border-radius: var(--radius-md);
  background-color: var(--color-input-bg);
  transition: background-color 200ms;

  &:hover {
    background-color: var(--color-input-bg-hover);
  }

  &:active {
    background-color: var(--color-input-bg-active);
  }
`;

const checkAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  80% {
    transform: scale(110%);
    opacity: 100%;
  }

  to {
    transform: scale(100%);
    opacity: 100%;
  }
`;

export const CheckWrapper = styled.span`
  width: fit-content;
  height: fit-content;
  display: flex;
  color: var(--color-input-content);
  position: absolute;
  top: -1px;

  animation: ${checkAnimation} 200ms forwards;
`;
