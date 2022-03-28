import React from 'react';
import {Header} from 'views/header';
import {Main} from 'components/pageWrapper';
import {Footer} from 'views/footer';

interface Props {
  children?: React.ReactNode;
  isHome?: boolean;
}

export const Layout = ({children, isHome}: Props) => {
  return (
    <div className='container'>
      <Header isHome={isHome} />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
