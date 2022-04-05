import React, {useCallback, useState} from 'react';

export const useInput = (
  initialValue = ''
): [
  string,
  (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
] => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  return [value, handleChange];
};
