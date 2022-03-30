import {ThemeProps} from 'components/_common/styles';
import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;

  &[data-is-home='true'] {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

export const SearchInputWrapper = styled.div<ThemeProps>`
  width: 22.5rem;
  display: flex;
  align-items: center;
  padding: 4px 16px;
  column-gap: 1rem;

  background-color: var(--color-input-bg);
  border: 2px solid var(--color-input-border);
  border-radius: var(--radius-full);

  &[data-is-home='true'] {
    border: none;
    box-shadow: 0 0 0.25rem var(--color-shadow-strong);
  }
`;

export const SearchSelect = styled.select`
  color: var(--color-input-content);
  background: var(--color-input-bg);
  border: none;
`;

export const SearchInput = styled.input<ThemeProps>`
  color: var(--color-input-content);
  background: var(--color-input-bg);
  width: 100%;
  border: none;

  &::placeholder {
    color: var(--color-input-placeholder);
  }
`;
