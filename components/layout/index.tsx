import React from 'react';
import {Header} from './header';
import {Footer} from './footer';
import * as Styled from './styled';
import {SearchFilter} from 'types';
import {FloatingMenu} from 'components/floatingMenu';

interface Props {
  children?: React.ReactNode;
  isHome?: boolean;
  searchFilter?: SearchFilter;
}

export const Layout = ({children, isHome}: Props) => {
  return (
    <Styled.Layout className='container'>
      <Header isHome={isHome} />
      <Styled.Main>{children}</Styled.Main>
      <Footer isHome={isHome} />
      <FloatingMenu />
    </Styled.Layout>
  );
};
