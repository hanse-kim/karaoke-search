import React from 'react';
import type {BoxModelProps} from 'components/_common/styles';
import {Button as StyledButton} from './styles';

interface Props extends BoxModelProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button = (props: Props) => {
  const {label, ...others} = props;
  return <StyledButton {...others}>{label}</StyledButton>;
};
