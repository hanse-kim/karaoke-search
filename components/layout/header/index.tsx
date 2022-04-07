import {useSearchFilter} from 'contexts/SearchFilterContext';
import {SearchForm} from 'components/searchForm';
import * as Styled from './styled';
import {Logo} from 'components/logo';

interface Props {
  isHome?: boolean;
}

export const Header = ({isHome}: Props) => {
  const searchFilter = useSearchFilter();

  return (
    <Styled.Header data-is-home={isHome}>
      <Styled.HeaderInner data-is-home={isHome}>
        <Logo isHome={isHome} />
        <SearchForm isHome={isHome} searchFilter={searchFilter} />
      </Styled.HeaderInner>
    </Styled.Header>
  );
};
