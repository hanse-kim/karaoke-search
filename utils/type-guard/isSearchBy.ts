import {SearchBy} from 'types';

export const isSearchBy = (value: unknown): value is SearchBy => {
  return value === 'NUMBER' || value === 'TITLE' || value === 'SINGER';
};
