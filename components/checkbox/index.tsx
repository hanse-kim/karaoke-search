import {ChangeEventHandler} from 'react';
import {CheckboxController, CheckboxWrapper, CheckWrapper} from './styles';
import CheckSvg from 'public/assets/check.svg';

interface Props {
  checked?: boolean;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({checked, label, onChange}: Props) => {
  return (
    <CheckboxWrapper>
      <input
        type='checkbox'
        checked={checked}
        style={{display: 'none'}}
        onChange={onChange}
      />
      <CheckboxController>
        {checked && (
          <CheckWrapper>
            <CheckSvg />
          </CheckWrapper>
        )}
      </CheckboxController>
      {label}
    </CheckboxWrapper>
  );
};
