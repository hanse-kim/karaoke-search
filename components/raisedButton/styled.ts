import styled from 'styled-components';

export const RaisedButton = styled.button`
  width: fit-content;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: var(--radius-md);
  box-shadow: 0px 2px 6px var(--color-shadow-normal);
  color: var(--color-button-text);
  background-color: var(--color-button-bg);
  cursor: pointer;
  transition: background-color 200ms;

  &[data-variant='selected'] {
    --color-button-text: var(--color-button-selected-text);
    --color-button-bg: var(--color-button-selected-bg);
    --color-button-bg-hover: var(--color-button-selected-bg-hover);
    --color-button-bg-active: var(--color-button-selected-bg-active);
  }

  &:not(:disabled):hover {
    background-color: var(--color-button-bg-hover);
  }

  &:not(:disabled):active {
    transform: translateY(2px);
    box-shadow: 0px 0px 6px var(--color-shadow-normal);
    background-color: var(--color-button-bg-active);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
