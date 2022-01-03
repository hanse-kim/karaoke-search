import {ThemeProps} from 'components/_common/styles';
import styled from 'styled-components';

export const Footer = styled.footer<ThemeProps>`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 1px solid ${(props) => props.theme.color.gray[3]};
  color: ${(props) => props.theme.color.gray[1]};
`;
