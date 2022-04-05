import React, {useCallback, ChangeEventHandler} from 'react';
import {Checkbox} from 'components/checkbox';
import {RadioGroupWrapper} from './styles';

interface Props {
  data: {label: string; value: string}[];
  selected?: string;
  onSelect?: (value: string) => void;
}

export const RadioGroup = React.memo(({data, selected, onSelect}: Props) => {
  const {handleChange} = useRadioGroup(onSelect);

  return (
    <RadioGroupWrapper>
      {data.map(({label, value}) => (
        <Checkbox
          key={value}
          checked={selected === value}
          label={label}
          onChange={handleChange(value)}
        />
      ))}
    </RadioGroupWrapper>
  );
});

RadioGroup.displayName = 'RadioGroup';

const useRadioGroup = (onSelect?: (value: string) => void) => {
  const handleChange = useCallback(
    (value: string): ChangeEventHandler<HTMLInputElement> =>
      (e) => {
        if (e.target.value && onSelect) {
          onSelect(value);
        }
      },
    [onSelect]
  );

  return {handleChange};
};
