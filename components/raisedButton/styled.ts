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

  &[data-variant='selected'] {
    color: var(--color-button-selected-text);
    background-color: var(--color-button-selected-bg);
  }

  &:not(:disabled):active {
    transform: translateY(2px);
    box-shadow: 0px 0px 6px var(--color-shadow-normal);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
