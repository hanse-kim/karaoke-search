import {useSearchFilter} from 'contexts/SearchFilterContext';
import {SearchForm} from 'components/searchForm';
import {HeaderWrapper, HeaderInner} from './styles';
import {Logo} from 'components/logo';

interface Props {
  isHome?: boolean;
}

export const Header = ({isHome}: Props) => {
  const searchFilter = useSearchFilter();

  return (
    <HeaderWrapper data-is-home={isHome}>
      <HeaderInner data-is-home={isHome}>
        <Logo isHome={isHome} />
        <SearchForm isHome={isHome} searchFilter={searchFilter} />
      </HeaderInner>
    </HeaderWrapper>
  );
};
