import type {GQLSearchFilter} from 'types';

const BASE_URL = 'https://www.tjmedia.com/tjsong/song_search_list.asp';

const SEARCH_BY = {
  TITLE: 1,
  SINGER: 2,
  NUMBER: 16,
};

const getSearchUrlTJ = (filter: GQLSearchFilter) => {
  const searchBy = SEARCH_BY[filter.searchBy];
  const keyword = encodeURIComponent(filter.keyword);
  const page = filter.page;

  return `${BASE_URL}?strType=${searchBy}&strText=${keyword}&intPage=${page}`;
};

export default getSearchUrlTJ;
