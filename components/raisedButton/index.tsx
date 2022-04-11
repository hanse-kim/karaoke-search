import * as Styled from './styled';

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'normal' | 'selected';
}

export const RaisedButton = ({
  children,
  className,
  onClick,
  type,
  disabled,
  variant,
}: Props) => {
  return (
    <Styled.RaisedButton
      className={className}
      onClick={onClick}
      type={type || 'button'}
      disabled={disabled}
      data-variant={variant}
    >
      {children}
    </Styled.RaisedButton>
  );
};
