import {SearchFilter} from 'types';
import {isObject} from './isObject';

export const isSearchFilter = (obj: unknown): obj is SearchFilter => {
  if (!isObject(obj)) {
    return false;
  }

  const filter = obj as SearchFilter;

  const isValidSearchBy =
    'searchBy' in filter && isSearchBy(filter['searchBy']);
  const isValidKeyword = 'keyword' in filter && isKeyword(filter['keyword']);
  const isValidKaraoke = 'karaoke' in filter && isKaraoke(filter['karaoke']);

  return isValidSearchBy && isValidKeyword && isValidKaraoke;
};

const isSearchBy = (value: unknown): value is SearchFilter['searchBy'] => {
  return value === 'NUMBER' || value === 'TITLE' || value === 'SINGER';
};

const isKeyword = (value: unknown): value is SearchFilter['keyword'] => {
  return typeof value === 'string';
};

const isKaraoke = (value: unknown): value is SearchFilter['karaoke'] => {
  return value === 'TJ' || value === 'KY';
};
