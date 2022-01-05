import {ThemeProps} from 'components/_common/styles';
import styled from 'styled-components';
import {fontWeight} from 'styles/units';

export const EmptyPageWrapper = styled.div<ThemeProps>`
  color: ${(props) => props.theme.color.gray[2]};
  font-weight: ${fontWeight.extrabold};

  width: 100%;
  height: 360px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  user-select: none;
`;

export const EmptyPageEmoticon = styled.span`
  font-size: 72px;

  :after {
    content: ':(';
  }
`;

export const EmptyPageText = styled.span`
  margin-top: 12px;
  font-size: 18px;
  text-align: center;

  & > * {
    font-weight: inherit;
  }
`;
