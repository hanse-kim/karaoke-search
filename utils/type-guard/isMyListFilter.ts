import {MyListFilter, MyListKaraoke, MyListSortBy, MyListSorting} from 'types';
import {isKaraoke} from './isKaraoke';
import {isObject} from './isObject';
import {isSearchBy} from './isSearchBy';

export const isMyListFilter = (obj: unknown): obj is MyListFilter => {
  if (!isObject(obj)) {
    return false;
  }

  const filter = obj as MyListFilter;

  const isValidKaraoke = 'karaoke' in filter && isMyListKaraoke(filter.karaoke);
  const isValidSortBy = 'sortBy' in filter && isMyListSortBy(filter.sortBy);
  const isValidSorting = 'sorting' in filter && isMyListSorting(filter.sorting);
  const isValidPage = 'page' in filter && isNumber(filter.page);

  return isValidKaraoke && isValidSortBy && isValidSorting && isValidPage;
};

const isMyListKaraoke = (value: unknown): value is MyListKaraoke => {
  return isKaraoke(value) || value === 'ALL';
};

const isMyListSortBy = (value: unknown): value is MyListSortBy => {
  return isSearchBy(value) || value === 'ADDED_AT';
};

const isMyListSorting = (value: unknown): value is MyListSorting => {
  return value === 'ASC' || value === 'DESC';
};

const isNumber = (value: unknown): value is number => {
  return typeof value === 'number';
};
