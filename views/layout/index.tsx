import React from 'react';
import {Header} from 'views/header';
import {Footer} from 'views/footer';
import {LayoutWrapper, Main} from './styles';

interface Props {
  children?: React.ReactNode;
  isHome?: boolean;
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
