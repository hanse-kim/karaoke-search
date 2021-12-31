import {SearchIconButton} from 'components/iconButton';
import {Stack} from 'components/_common';
import {
  SearchFormWrapper,
  SearchFormInputWrapper,
  SearchFormSelect,
  SearchFormInput,
} from './styles';

const karaokeList = [
  {value: 'TJ', label: 'TJ'},
  {value: 'KY', label: 'KY'},
];

const searchByList = [
  {value: 'TITLE', label: '곡 제목'},
  {value: 'SINGER', label: '가수'},
  {value: 'NUMBER', label: '곡 번호'},
];

const SearchForm = () => {
  return (
    <SearchFormWrapper>
      <Stack spacing='4px' isHorizontal>
        <SearchFormInputWrapper>
          <SearchFormSelect>
            {karaokeList.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </SearchFormSelect>
        </SearchFormInputWrapper>
        <SearchFormInputWrapper>
          <SearchFormSelect>
            {searchByList.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </SearchFormSelect>
        </SearchFormInputWrapper>
        <SearchFormInputWrapper>
          <SearchFormInput placeholder='검색어를 입력하세요' />
          <SearchIconButton type='submit' />
        </SearchFormInputWrapper>
      </Stack>
    </SearchFormWrapper>
  );
};

export default SearchForm;
