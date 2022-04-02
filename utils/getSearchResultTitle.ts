import {SearchFilter} from 'types';

const searchByMap = {
  TITLE: '제목',
  NUMBER: '번호',
  SINGER: '가수',
};

export const getSearchResultTitle = ({ karaoke, searchBy, keyword }: SearchFilter) => {
  return `${karaoke}에서 "${keyword}" ${searchByMap[searchBy]} 검색 결과`;
};
