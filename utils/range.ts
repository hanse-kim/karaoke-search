const range = (start: number, stop: number) => {
  const interval = start <= stop ? 1 : -1;
  const arrayLength = Math.abs(stop - start);
  const array = Array(arrayLength);
  for (let i = 0; i < arrayLength; i++) {
    array[i] = start + (i * interval);
  }

  return array;
};

export default range;
