import React, {useState} from 'react';
import {useInput} from 'hooks/useInput';
import {useRouter} from 'hooks/useRouter';
import {RadioGroup} from 'components/radioGroup';
import {RippleButton} from 'components/rippleButton';
import {SearchFilter, SearchFilterObject} from 'types';
import * as Styled from './styled';
import SearchIconSvg from 'public/assets/iconSearch.svg';

interface Props {
  isHome?: boolean;
  searchFilter?: SearchFilterObject;
}

const karaokeList: {value: SearchFilter['karaoke']; label: string}[] = [
  {value: 'TJ', label: 'TJ'},
  {value: 'KY', label: 'KY'},
];

const searchByList: {value: SearchFilter['searchBy']; label: string}[] = [
  {value: 'TITLE', label: '곡 제목'},
  {value: 'SINGER', label: '가수'},
  {value: 'NUMBER', label: '곡 번호'},
];

export const SearchForm = ({isHome, searchFilter}: Props) => {
  const {
    handleSubmit,
    karaoke,
    setKaraoke,
    searchBy,
    handleChangeSearchBy,
    keyword,
    handleChangeKeyword,
  } = useSearchForm(
    {
      karaoke: karaokeList[0].value,
      searchBy: searchByList[0].value,
      keyword: '',
    },
    searchFilter
  );

  return (
    <Styled.SearchForm data-is-home={isHome} onSubmit={handleSubmit}>
      <RadioGroup data={karaokeList} selected={karaoke} onSelect={setKaraoke} />
      <Styled.SearchInputWrapper data-is-home={isHome}>
        <Styled.SearchSelect
          title='검색 기준'
          name='searchBy'
          value={searchBy}
          onChange={handleChangeSearchBy}
        >
          {searchByList.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </Styled.SearchSelect>
        <Styled.SearchInput
          placeholder='search for...'
          value={keyword}
          onChange={handleChangeKeyword}
        />
        <RippleButton type='submit'>
          <SearchIconSvg />
        </RippleButton>
      </Styled.SearchInputWrapper>
    </Styled.SearchForm>
  );
};

const useSearchForm = (
  initialValue: SearchFilter,
  searchFilter?: SearchFilterObject
) => {
  const [karaoke, setKaraoke] = useState<string>(
    searchFilter?.karaoke || initialValue.karaoke
  );
  const [searchBy, handleChangeSearchBy] = useInput(
    searchFilter?.searchBy || initialValue.searchBy
  );
  const [keyword, handleChangeKeyword] = useInput(
    searchFilter?.keyword || initialValue.keyword
  );

  const {pushUrl} = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = {
      pathname: '/searchResult',
      query: {karaoke, searchBy, keyword},
    };
    pushUrl(url);
  };

  return {
    karaoke,
    setKaraoke,
    searchBy,
    handleChangeSearchBy,
    keyword,
    handleChangeKeyword,
    handleSubmit,
  };
};
