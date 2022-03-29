import type {ThemeProps} from 'components/_common/styles';
import styled from 'styled-components';
import {fontSize, fontWeight} from 'styles/units';

interface FilterToggleProps extends ThemeProps {
  isSelected?: boolean;
}

export const FilterLabel = styled.div`
  width: 60px;
  text-align: right;
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.bold};
`;

export const FilterToggle = styled.span<FilterToggleProps>`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  padding: 2px 8px;
  border: 1px solid ${(props) => props.theme.color.gray[0]};
  border-radius: 9999px;
  cursor: pointer;
  user-select: none;

  color: ${(props) =>
    props.isSelected ? props.theme.color.white : props.theme.color.gray[0]};
  background: ${(props) =>
    props.isSelected ? props.theme.color.gray[0] : props.theme.color.white};
`;
