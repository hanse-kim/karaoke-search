import {SearchFilter} from 'types';
import {isKaraoke} from './isKaraoke';
import {isObject} from './isObject';
import {isSearchBy} from './isSearchBy';
import {isString} from './isString';

export const isSearchFilter = (obj: unknown): obj is SearchFilter => {
  if (!isObject(obj)) {
    return false;
  }

  const filter = obj as SearchFilter;

  const isValidSearchBy =
    'searchBy' in filter && isSearchBy(filter['searchBy']);
  const isValidKeyword = 'keyword' in filter && isString(filter['keyword']);
  const isValidKaraoke = 'karaoke' in filter && isKaraoke(filter['karaoke']);

  return isValidSearchBy && isValidKeyword && isValidKaraoke;
};
