import React from 'react';
import {Heading, ArticleWrapper} from './styles';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Article = ({title: label, children}: Props) => {
  return (
    <ArticleWrapper>
      <Heading>{label}</Heading>
      {children}
    </ArticleWrapper>
  );
};
