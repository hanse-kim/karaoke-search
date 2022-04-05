import React from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {LayoutWrapper, Main} from './styles';
import {SearchFilter} from 'types';

interface Props {
  children?: React.ReactNode;
  isHome?: boolean;
  searchFilter?: SearchFilter;
}

export const Layout = ({children, isHome}: Props) => {
  return (
    <LayoutWrapper className='container'>
      <Header isHome={isHome} />
      <Main>{children}</Main>
      <Footer isHome={isHome} />
    </LayoutWrapper>
  );
};
