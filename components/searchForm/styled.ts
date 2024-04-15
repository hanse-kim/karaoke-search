import React from 'react';
import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;

  [data-is-home='true'] & {
    flex-direction: column;
    row-gap: 1rem;
  }

  @media screen and (max-width: 767px) {
    & {
      width: 100%;
      flex-direction: column;
      row-gap: 0.25rem;
    }
  }
`;

export const SearchInputWrapper = React.memo(styled.div`
  width: 22.5rem;
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
  column-gap: 1rem;

  background-color: var(--color-input-bg);
  border: 2px solid var(--color-input-border);
  border-radius: var(--radius-full);

  [data-is-home='true'] & {
    border: none;
    box-shadow: 0 0 0.25rem var(--color-shadow-strong);
  }

  @media screen and (max-width: 767px) {
    & {
      max-width: 100%;
    }
  }
`);

export const SearchSelect = React.memo(styled.select`
  color: var(--color-input-content);
  background: var(--color-input-bg);
  border: none;
`);

export const SearchInput = React.memo(styled.input`
  color: var(--color-input-content);
  background: var(--color-input-bg);
  width: 100%;
  border: none;

  &::placeholder {
    color: var(--color-input-placeholder);
  }
`);
