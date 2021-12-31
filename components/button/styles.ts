import {BoxModelProps, boxModelStyles} from 'components/_common/styles';
import styled from 'styled-components';
import type {Theme} from 'styles/theme';
import {fontSize} from 'styles/units';

interface ButtonProps extends BoxModelProps {
  theme: Theme;
}

export const Button = styled.button<ButtonProps>`
  font-size: ${fontSize.sm};
  color: ${(props) => props.theme.color.gray[0]};
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.gray[3]};
  background: none;
  transition: background 0.1s;
  ${boxModelStyles}

  &:hover {
    background: ${(props) => props.theme.color.gray[4]}80;
  }

  &:active {
    background: ${(props) => props.theme.color.gray[4]};
  }
`;
