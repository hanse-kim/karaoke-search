import {Logo} from 'components/logo';
import {SearchForm} from 'components/searchForm';
import {useSearchFilter} from 'contexts/SearchFilterContext';
import * as Styled from './styled';

interface Props {
  isHome?: boolean;
}

export const Header = ({isHome}: Props) => {
  const searchFilter = useSearchFilter();

  return (
    <Styled.Header data-is-home={isHome}>
      <Styled.HeaderInner>
        <Logo />
        <SearchForm searchFilter={searchFilter} />
      </Styled.HeaderInner>
    </Styled.Header>
  );
};
