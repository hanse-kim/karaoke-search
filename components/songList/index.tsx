import {Loading} from 'components/loading';
import {Song} from 'types';
import {SongItem} from './songItem';
import {ListItem, ListItemLoading, SongListWrapper} from './styles';

interface Props {
  songList: Song[];
  isLoading?: boolean;
}

export const SongList = ({songList, isLoading}: Props) => {
  return (
    <SongListWrapper>
      {songList.map((song) => (
        <ListItem key={song.id}>
          <SongItem song={song} />
        </ListItem>
      ))}
      <ListItemLoading>{isLoading && <Loading />}</ListItemLoading>
    </SongListWrapper>
  );
};
