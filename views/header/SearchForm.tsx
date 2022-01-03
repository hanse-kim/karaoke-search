import {SearchIconButton} from 'components/iconButton';
import {Stack} from 'components/_common';
import useMediaQuery from 'hooks/useMediaQuery';
import React from 'react';
import { breakPoint } from 'styles/units';
import {SearchFilter} from 'types';
import useSearchForm from './hooks/useSearchForm';
import {
  SearchFormWrapper,
  SearchFormInputWrapper,
  SearchFormSelect,
  SearchFormInput,
} from './styles';

interface Props {
  onSubmit: (filter: SearchFilter) => void;
}

const karaokeList = [
  {value: 'TJ', label: 'TJ'},
  {value: 'KY', label: 'KY'},
];

const searchByList = [
  {value: 'TITLE', label: '곡 제목'},
  {value: 'SINGER', label: '가수'},
  {value: 'NUMBER', label: '곡 번호'},
];

const SearchForm = (props: Props) => {
  const {
    karaoke,
    searchBy,
    keyword,
    onKaraokeChange,
    onSearchByChange,
    onKeywordChange,
  } = useSearchForm();
  const {matches} = useMediaQuery(`(max-width: ${breakPoint.mobile})`);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); console.log({ karaoke, searchBy, keyword });
    props.onSubmit({karaoke, searchBy, keyword} as SearchFilter);
  };

  return (
    <SearchFormWrapper onSubmit={onSubmit}>
      <Stack spacing='4px' isHorizontal>
        <SearchFormInputWrapper>
          <SearchFormSelect value={karaoke} onChange={onKaraokeChange}>
            {karaokeList.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </SearchFormSelect>
        </SearchFormInputWrapper>
        <SearchFormInputWrapper>
          <SearchFormSelect value={searchBy} onChange={onSearchByChange}>
            {searchByList.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </SearchFormSelect>
        </SearchFormInputWrapper>
        <SearchFormInputWrapper>
          <SearchFormInput
            placeholder='검색어를 입력하세요'
            value={keyword}
            onChange={onKeywordChange}
          />
          {!matches && <SearchIconButton type='submit' />}
        </SearchFormInputWrapper>
      </Stack>
    </SearchFormWrapper>
  );
};

export default SearchForm;
