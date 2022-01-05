import {ThemeProps} from 'components/_common/styles';
import styled, {css} from 'styled-components';
import {fontSize, fontWeight} from 'styles/units';

export const PageNavWrapper = styled.div<ThemeProps>`
  display: flex;
  width: fit-content;
  height: 24px;
  border: 1px solid ${(props) => props.theme.color.gray[3]};
  border-radius: 4px;
  overflow: hidden;
  font-weight: ${fontWeight.bold};
`;

const pageNavButtonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: -1px 0;
  font-size: ${fontSize.sm};
`;

export const PageNavButton = styled.span<ThemeProps>`
  ${pageNavButtonStyles}
  color: ${(props) => props.theme.color.gray[0]};
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.color.gray[4]};
  }
`;

export const PageNavButtonSelected = styled.span<ThemeProps>`
  ${pageNavButtonStyles}
  background: ${(props) => props.theme.color.gray[0]};
  color: ${(props) => props.theme.color.white};
`;

export const PageNavButtonDisabled = styled.span<ThemeProps>`
  ${pageNavButtonStyles}
  color: ${(props) => props.theme.color.gray[3]};
`;
