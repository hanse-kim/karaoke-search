import {Flex} from 'components/_common';
import {ThemeProps} from 'components/_common/styles';
import styled from 'styled-components';
import {fontSize} from 'styles/units';

export const SongTableHeaderInner = styled.div`
  height: 30px;
  font-weight: bold;
  font-size: ${fontSize.md};

  display: flex;
  flex-direction: row;

  & > * {
    justify-content: center;
  }
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
`;

export const SongNumberCell = styled(TableCell)`
  width: 120px;
  justify-content: center;
`;

export const SongTitleCell = styled(TableCell)`
  flex: 1;
`;

export const MyListCell = styled(TableCell)`
  width: 120px;
  justify-content: center;
`;

export const SongTableItemWrapper = styled.div<ThemeProps>`
  display: flex;
  flex-direction: row;

  height: 50px;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${(props) => props.theme.color.gray[4]};
  }
`;

export const TitleText = styled.span<ThemeProps>`
  font-size: ${fontSize.md};
  line-height: 1em;
`;

export const SingerText = styled.span<ThemeProps>`
  font-size: ${fontSize.sm};
  color: ${(props) => props.theme.color.gray[1]};
`;
