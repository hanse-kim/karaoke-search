import styled from "styled-components";
import { headingText } from "styles/typography";

export const ArticleWrapper = styled.article`
  width: var(--screen-width);
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  padding-top: 36px;
  padding-bottom: 108px;
`;

export const Heading = styled.h1`
  ${headingText};
  color: var(--color-heading);
`;