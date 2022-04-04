import {Logo} from 'components/logo';
import {SearchFilter} from 'types';
import {SearchForm} from 'views/searchForm';
import {HeaderWrapper, HeaderInner} from './styles';

interface Props {
  isHome?: boolean;
  searchFilter?: SearchFilter;
}

export const Header = ({isHome}: Props) => {
  return (
    <HeaderWrapper data-is-home={isHome}>
      <HeaderInner data-is-home={isHome}>
        <Logo isHome={isHome} />
        <SearchForm isHome={isHome} />
      </HeaderInner>
    </HeaderWrapper>
  );
};
