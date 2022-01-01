import {Divider} from 'components/divider';
import {Box} from 'components/_common';
import {
  SongTableHeaderInner,
  SongNumberCell,
  SongTitleCell,
  MyListCell,
} from './styles';

const SongTableHeader = () => {
  return (
    <Box>
      <Divider variant='thick' />
      <SongTableHeaderInner>
        <SongNumberCell>곡 번호</SongNumberCell>
        <SongTitleCell>곡 제목 & 가수</SongTitleCell>
        <MyListCell>마이리스트</MyListCell>
      </SongTableHeaderInner>
      <Divider variant='thick' />
    </Box>
  );
};

export default SongTableHeader;
