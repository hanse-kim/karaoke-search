import {Logo} from 'components/logo';
import {useRouter} from 'next/router';
import {SearchFilter} from 'types';
import SearchForm from 'views/searchForm';
import {HeaderWrapper, HeaderInner} from './styles';

interface Props {
  isHome?: boolean;
}

export const Header = ({isHome}: Props) => {
  const router = useRouter();
  const onSubmit = (searchFilter: SearchFilter) => {
    const url = {pathname: '/searchResult', query: {...searchFilter}};
    router.push(url);
  };

  return (
    <HeaderWrapper data-is-home={isHome}>
      <HeaderInner data-is-home={isHome}>
        <Logo isHome={isHome} />
        <SearchForm onSubmit={onSubmit} isHome={isHome} />
      </HeaderInner>
    </HeaderWrapper>
  );
};
