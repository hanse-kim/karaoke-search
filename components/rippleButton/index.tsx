import React from 'react';
import * as Styled from './styled';

interface Props {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const RippleButton = React.memo(
  ({children, onClick, type, disabled}: Props) => {
    return (
      <Styled.RippleButton
        type={type || 'button'}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </Styled.RippleButton>
    );
  }
);

RippleButton.displayName = 'RippleButton';
