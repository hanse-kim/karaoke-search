import type {GQLSearchFilter} from 'types';

const BASE_URL = 'https://kysing.kr/search';

const SEARCH_BY = {
  NUMBER: 1,
  TITLE: 2,
  SINGER: 7,
};

const getSearchUrlKY = (filter: GQLSearchFilter) => {
  const searchBy = SEARCH_BY[filter.searchBy];
  const keyword = encodeURIComponent(filter.keyword);
  const page = filter.page;

  return `${BASE_URL}?category=${searchBy}&keyword=${keyword}&s_page=${page}`;
};

export default getSearchUrlKY;
