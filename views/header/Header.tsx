import {Button} from 'components/button';
import {useRouter} from 'next/router';
import {SearchFilter} from 'types';
import SearchForm from './SearchForm';
import {HeaderWrapper, HeaderInner, HeaderNav, Logo} from './styles';

const Header = () => {
  const router = useRouter();
  const onSubmit = (searchFilter: SearchFilter) => {
    const url = {pathname: '/searchResult', query: {...searchFilter}};
    router.push(url);
  };
  const moveToMyPage = () => {
    router.push('/myList');
  }

  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderNav>
          <Logo href='/' />
          <Button label='마이리스트' onClick={moveToMyPage} />
        </HeaderNav>
        <SearchForm onSubmit={onSubmit} />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
