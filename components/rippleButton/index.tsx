import React from 'react';
import {RippleButtonWrapper} from './styles';

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const RippleButton = ({children, onClick}: Props) => {
  return (
    <RippleButtonWrapper type='button' onClick={onClick}>
      {children}
    </RippleButtonWrapper>
  );
};
