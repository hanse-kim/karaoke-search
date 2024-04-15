import {RadioGroup} from 'components/radioGroup';
import {RippleButton} from 'components/rippleButton';
import {useRouter} from 'hooks/useRouter';
import SearchIconSvg from 'public/assets/iconSearch.svg';
import React, {ChangeEventHandler, useEffect, useState} from 'react';
import {SearchFilter, SearchFilterObject} from 'types';
import * as Styled from './styled';

interface Props {
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

export const SearchForm = ({searchFilter}: Props) => {
  const {
    handleSubmit,
    karaoke,
    handleKaraokeSelect,
    searchBy,
    handleSearchByChange,
    keyword,
    handleKeywordChange,
  } = useSearchForm(
    {
      karaoke: karaokeList[0].value,
      searchBy: searchByList[0].value,
      keyword: '',
    },
    searchFilter
  );

  return (
    <Styled.SearchForm onSubmit={handleSubmit}>
      <RadioGroup
        data={karaokeList}
        selected={karaoke}
        onSelect={handleKaraokeSelect}
      />
      <Styled.SearchInputWrapper>
        <Styled.SearchSelect
          title='검색 기준'
          name='searchBy'
          value={searchBy}
          onChange={handleSearchByChange}
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
          onChange={handleKeywordChange}
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
  const [karaoke, setKaraoke] = useState<string>('');
  const [searchBy, setSearchBy] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');

  const {pushUrl} = useRouter();

  const handleSearchByChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchBy(e.currentTarget.value);
  };

  const handleKeywordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = {
      pathname: '/searchResult',
      query: {karaoke, searchBy, keyword},
    };
    pushUrl(url);
  };

  useEffect(() => {
    setKaraoke(searchFilter?.karaoke || initialValue.karaoke);
    setSearchBy(searchFilter?.searchBy || initialValue.searchBy);
    setKeyword(searchFilter?.keyword || initialValue.keyword);
  }, [
    initialValue.karaoke,
    initialValue.keyword,
    initialValue.searchBy,
    searchFilter?.karaoke,
    searchFilter?.keyword,
    searchFilter?.searchBy,
  ]);

  return {
    karaoke,
    handleKaraokeSelect: setKaraoke,
    searchBy,
    handleSearchByChange,
    keyword,
    handleKeywordChange,
    handleSubmit,
  };
};
