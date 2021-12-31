import {Button} from 'components/button';
import SearchForm from './SearchForm';
import {HeaderWrapper, HeaderInner, HeaderNav, Logo} from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderNav>
          <Logo href='/' />
          <Button label='마이리스트' />
        </HeaderNav>
        <SearchForm />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
