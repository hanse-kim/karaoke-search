import type {ThemeProps} from 'components/_common/styles';
import React from 'react';
import styled from 'styled-components';

interface DividerProps extends ThemeProps {
  variant?: 'default' | 'thick';
}

interface DividerPropsOutput extends DividerProps {
  borderColor?: React.CSSProperties['borderColor'];
  borderWidth?: React.CSSProperties['borderWidth'];
}

export const Divider = styled.hr.attrs<DividerProps>((props) =>
  props.variant === 'thick'
    ? {borderColor: props.theme.color.gray[0], borderWidth: '2px'}
    : {borderColor: props.theme.color.gray[3], borderWidth: '1px'}
)<DividerPropsOutput>`
  border-color: ${(props) => props.borderColor};
  border-width: 0;
  border-top-width: ${(props) => props.borderWidth};
  border-style: solid;
`;
