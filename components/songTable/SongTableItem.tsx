import {EmptyHeartIconButton} from 'components/iconButton';
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
}

const SongTableItem = (props: Props) => {
  const {karaoke, number, title, singer} = props.song;

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
        <EmptyHeartIconButton />
      </MyListCell>
    </SongTableItemWrapper>
  );
};

export default SongTableItem;
