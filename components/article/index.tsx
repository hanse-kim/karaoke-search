import React from 'react';
import * as Styled from './styled';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Article = ({title, children}: Props) => {
  return (
    <Styled.Article>
      <Styled.Heading>{title}</Styled.Heading>
      {children}
    </Styled.Article>
  );
};
