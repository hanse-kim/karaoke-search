import {ChangeEventHandler} from 'react';
import * as Styled from './styled';
import CheckSvg from 'public/assets/check.svg';

interface Props {
  checked?: boolean;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({checked, label, onChange}: Props) => {
  return (
    <Styled.Checkbox>
      <input
        type='checkbox'
        checked={checked}
        style={{display: 'none'}}
        onChange={onChange}
      />
      <Styled.CheckboxController>
        {checked && (
          <Styled.CheckWrapper>
            <CheckSvg />
          </Styled.CheckWrapper>
        )}
      </Styled.CheckboxController>
      {label}
    </Styled.Checkbox>
  );
};
