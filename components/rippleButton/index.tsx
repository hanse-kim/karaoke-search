import React from 'react';
import * as Styled from './styled';

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

export const RippleButton = React.memo(({children, onClick, type}: Props) => {
  return (
    <Styled.RippleButton type={type} onClick={onClick}>
      {children}
    </Styled.RippleButton>
  );
});

RippleButton.displayName = 'RippleButton';
