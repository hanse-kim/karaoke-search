import {Checkbox} from 'components/checkbox';
import {ChangeEvent, ChangeEventHandler} from 'react';
import {RadioGroupWrapper} from './styles';

interface Props {
  data: {label: string; value: string}[];
  selected?: string;
  onSelect?: (value: string) => void;
}

export const RadioGroup = ({data, selected, onSelect}: Props) => {
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
};

const useRadioGroup = (onSelect?: (value: string) => void) => {
  const handleChange =
    (value: string): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      if (e.target.value && onSelect) {
        onSelect(value);
      }
    };

  return {handleChange};
};
