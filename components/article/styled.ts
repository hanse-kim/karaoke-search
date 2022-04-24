import styled from 'styled-components';
import {headingText} from 'styles/typography';

export const Article = styled.article`
  width: var(--screen-width);
  display: flex;
  flex-direction: column;
  row-gap: 2.25rem;
  padding-top: 2.25rem;
  padding-bottom: 4rem;

  @media screen and (max-width: 767px) {
    & {
      row-gap: 1.25rem;
      padding-top: 1.5rem;
      padding-bottom: 0;
    }
  }
`;

export const Heading = styled.h1`
  ${headingText};
  color: var(--color-heading);
`;
