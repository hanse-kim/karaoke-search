import React from 'react';
import {Heading, ArticleWrapper} from './styles';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Article = ({title, children}: Props) => {
  return (
    <ArticleWrapper>
      <Heading>{title}</Heading>
      {children}
    </ArticleWrapper>
  );
};
