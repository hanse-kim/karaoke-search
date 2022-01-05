import {ThemeProps} from 'components/_common/styles';
import styled from 'styled-components';
import {breakPoint, fontSize, fontWeight} from 'styles/units';

export const SongTableHeaderInner = styled.div`
  height: 30px;
  font-weight: ${fontWeight.bold};
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

  @media (max-width: ${breakPoint.mobile}) {
    width: auto;
    justify-content: start;
  }
`;

export const SongTitleCell = styled(TableCell)`
  flex: 1;
`;

export const MyListCell = styled(TableCell)`
  width: 120px;
  justify-content: center;

  @media (max-width: ${breakPoint.mobile}) {
    width: auto;
  }
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

  @media (max-width: ${breakPoint.mobile}) {
    height: auto;
    padding: 8px 12px;

    :hover {
      background: none;
    }
  }
`;

export const TitleText = styled.span<ThemeProps>`
  font-size: ${fontSize.md};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const SingerText = styled.span<ThemeProps>`
  font-size: ${fontSize.sm};
  color: ${(props) => props.theme.color.gray[1]};
`;
