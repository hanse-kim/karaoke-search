import {Button} from 'components/button';
import {useRouter} from 'next/router';
import {SearchFilter} from 'types';
import MyListButton from './MyListButton';
import SearchForm from './SearchForm';
import {HeaderWrapper, HeaderInner, HeaderNav, Logo} from './styles';

const Header = () => {
  const router = useRouter();
  const onSubmit = (searchFilter: SearchFilter) => {
    const url = {pathname: '/searchResult', query: {...searchFilter}};
    router.push(url);
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderNav>
          <Logo href='/' />
          <MyListButton />
        </HeaderNav>
        <SearchForm onSubmit={onSubmit} />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
