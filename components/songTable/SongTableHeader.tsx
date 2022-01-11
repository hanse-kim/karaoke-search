import {Divider} from 'components/divider';
import {Box} from 'components/_common';
import {SongTableContext} from 'contexts/SongTableContext';
import {useContext} from 'react';
import {
  SongTableHeaderInner,
  RankingCell,
  SongNumberCell,
  SongTitleCell,
  MyListCell,
} from './styles';

const SongTableHeader = () => {
  const {isMobile, displayRanking} = useContext(SongTableContext);

  if (isMobile) {
    return (
      <Box>
        <Divider variant='thick' />{' '}
      </Box>
    );
  }

  return (
    <Box>
      <Divider variant='thick' />
      <SongTableHeaderInner>
        {displayRanking && <RankingCell>순위</RankingCell>}
        <SongNumberCell>곡 번호</SongNumberCell>
        <SongTitleCell>곡 제목 & 가수</SongTitleCell>
        <MyListCell>마이리스트</MyListCell>
      </SongTableHeaderInner>
      <Divider variant='thick' />
    </Box>
  );
};

export default SongTableHeader;
