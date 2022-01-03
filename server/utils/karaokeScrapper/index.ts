import axios from 'axios';
import type {GQLSearchFilter} from 'types';
import htmlToSongList from './htmlParser';
import getUrl from './urlGenerator';

export const getSearchResult = async (filter: GQLSearchFilter) => {
  const url = getUrl(filter);
  const response = await axios.get(url);
  const songList = htmlToSongList(response.data, filter.karaoke);
  return songList;
};
