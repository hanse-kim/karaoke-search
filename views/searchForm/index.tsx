import {RadioGroup} from 'components/radioGroup';
import { RippleButton } from 'components/rippleButton';
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

interface Props {
  isHome?: boolean;
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

const SearchForm = ({isHome, onSubmit}: Props) => {
  const [karaoke, setKaraoke] = useState('TJ');
  const [searchBy, handleChangeSearchBy] = useInput(searchByList[0].value);
  const [keyword, handleChangeKeyword] = useInput();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({karaoke, searchBy, keyword} as SearchFilter);
  };

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
        <RippleButton>
          <SearchIconSvg />
        </RippleButton>
      </SearchInputWrapper>
    </SearchFormWrapper>
  );
};

export default SearchForm;
