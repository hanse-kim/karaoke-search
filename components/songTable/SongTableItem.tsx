import {
  EmptyHeartIconButton,
  FilledHeartIconButton,
} from 'components/iconButton';
import {Stack} from 'components/_common';
import {Song} from 'types';
import {
  SongNumberCell,
  SongTitleCell,
  MyListCell,
  SongTableItemWrapper,
  SingerText,
  TitleText,
} from './styles';

interface Props {
  song: Song;
  inMyList?: boolean;
}

const SongTableItem = (props: Props) => {
  const {song, inMyList: isMyList} = props;
  const {karaoke, number, title, singer} = song;

  return (
    <SongTableItemWrapper>
      <SongNumberCell>{`${karaoke}_${number}`}</SongNumberCell>
      <SongTitleCell>
        <Stack spacing='4px'>
          <TitleText>{title}</TitleText>
          <SingerText>{singer}</SingerText>
        </Stack>
      </SongTitleCell>
      <MyListCell>
        {isMyList ? <FilledHeartIconButton /> : <EmptyHeartIconButton />}
      </MyListCell>
    </SongTableItemWrapper>
  );
};

export default SongTableItem;
