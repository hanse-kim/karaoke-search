import {RadioGroup} from 'components/radioGroup';
import {RippleButton} from 'components/rippleButton';
import {useInput} from 'hooks/useInput';
import React, {useState} from 'react';
import {SearchFilter} from 'types';
import {
  SearchFormWrapper,
  SearchInputWrapper,
  SearchSelect,
  SearchInput,
} from './styles';
import SearchIconSvg from 'public/assets/iconSearch.svg';
import {useRouter} from 'hooks/useRouter';
import {useSearchFilter} from 'contexts/SearchFilterContext';

interface Props {
  isHome?: boolean;
  searchFilter?: SearchFilter;
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

export const SearchForm = ({isHome}: Props) => {
  const {
    handleSubmit,
    karaoke,
    setKaraoke,
    searchBy,
    handleChangeSearchBy,
    keyword,
    handleChangeKeyword,
  } = useSearchForm({
    karaoke: karaokeList[0].value,
    searchBy: searchByList[0].value,
    keyword: '',
  });

  return (
    <SearchFormWrapper data-is-home={isHome} onSubmit={handleSubmit}>
      <RadioGroup data={karaokeList} selected={karaoke} onSelect={setKaraoke} />
      <SearchInputWrapper data-is-home={isHome}>
        <SearchSelect value={searchBy} onChange={handleChangeSearchBy}>
          {searchByList.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </SearchSelect>
        <SearchInput
          placeholder='search for...'
          value={keyword}
          onChange={handleChangeKeyword}
        />
        <RippleButton type='submit'>
          <SearchIconSvg />
        </RippleButton>
      </SearchInputWrapper>
    </SearchFormWrapper>
  );
};

const useSearchForm = (initialValue: SearchFilter) => {
  const searchFilter = useSearchFilter();

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
