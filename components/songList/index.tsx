import {Loading} from 'components/loading';
import {useMyList} from 'contexts/MyListContext';
import React, {useCallback} from 'react';
import {Song} from 'types';
import {SongItem} from './songItem';
import {ListItemLoading, SongListWrapper} from './styles';

interface Props {
  songList: Song[];
  isLoading?: boolean;
}

export const SongList = ({songList, isLoading}: Props) => {
  const {myList, addSong, removeSong} = useMyList();

  const handleToggleMyListButton = useCallback(
    (song: Song, inMyList?: boolean) => {
      if (inMyList) removeSong(song.id);
      else addSong(song);
    },
    [addSong, removeSong]
  );

  if (myList === null) {
    return (
      <SongListWrapper>
        <ListItemLoading>
          <Loading />
        </ListItemLoading>
      </SongListWrapper>
    );
  }

  return (
    <SongListWrapper>
      {songList.map((song) => (
        <SongItem key={song.id} song={song} inMyList={song.id in myList} onToggleMyList={handleToggleMyListButton} />
      ))}
      <ListItemLoading>{isLoading && <Loading />}</ListItemLoading>
    </SongListWrapper>
  );
};
