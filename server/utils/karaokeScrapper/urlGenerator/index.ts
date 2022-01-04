import type {GQLSearchFilter, Karaoke} from 'types';
import {URL_POPULAR_KY, URL_POPULAR_TJ} from '../consts';
import getSearchUrlKY from './getSearchUrlKY';
import getSearchUrlTJ from './getSearchUrlTJ';

export const getSearchUrl = (filter: GQLSearchFilter) => {
  let url = '';
  if (filter.karaoke === 'TJ') {
    url = getSearchUrlTJ(filter);
  } else if (filter.karaoke === 'KY') {
    url = getSearchUrlKY(filter);
  }

  console.log(url);

  return url;
};

export const getPopluarUrl = (karaoke: Karaoke) => {
  let url = '';
  if (karaoke === 'TJ') {
    url = URL_POPULAR_TJ;
  } else if (karaoke === 'KY') {
    url = URL_POPULAR_KY;
  }

  return url;
};
