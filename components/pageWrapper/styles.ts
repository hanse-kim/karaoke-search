import styled from "styled-components";
import { breakPoint } from "styles/units";

export const Main = styled.main`
  width: 720px;
  min-height: 720px;
  margin: 0 auto 120px auto;
  flex: 1;

  @media (max-width: ${breakPoint.tablet}) {
    width: 100%;
  }
`;

export const Article = styled.article`
  width: 100%;
  padding: 36px 12px;
`;