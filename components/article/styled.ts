import styled from 'styled-components';
import {headingText} from 'styles/typography';

export const Article = styled.article`
  width: var(--screen-width);
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  padding-top: 36px;
  padding-bottom: 64px;
`;

export const Heading = styled.h1`
  ${headingText};
  color: var(--color-heading);
`;
