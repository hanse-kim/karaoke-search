import axios from 'axios';
import type {GQLSearchFilter, Karaoke} from 'types';
import getSongListFromHtml from './htmlParser';
import {getPopluarUrl, getSearchUrl} from './urlGenerator';

export const getSearchResult = async (filter: GQLSearchFilter) => {
  const url = getSearchUrl(filter);
  const response = await axios.get(url);
  const songList = getSongListFromHtml(
    response.data,
    filter.karaoke,
    'SEARCH_RESULT'
  );
  return songList;
};

export const getPopluar = async (karaoke: Karaoke) => {
  const url = getPopluarUrl(karaoke);
  const response = await axios.get(url);
  const songList = getSongListFromHtml(response.data, karaoke, 'POPULAR');
  return songList;
};
