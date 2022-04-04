import React from 'react';
import {RippleButtonWrapper} from './styles';

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

export const RippleButton = ({children, onClick, type}: Props) => {
  return (
    <RippleButtonWrapper type={type} onClick={onClick}>
      {children}
    </RippleButtonWrapper>
  );
};
