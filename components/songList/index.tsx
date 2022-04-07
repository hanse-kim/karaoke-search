import React, {useCallback} from 'react';
import {Loading} from 'components/loading';
import {useMyList} from 'contexts/MyListContext';
import {Song} from 'types';
import {SongItem} from './songItem';
import * as Styled from './styled';

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
      <Styled.SongList>
        <Styled.ListItemLoadingWrapper>
          <Loading />
        </Styled.ListItemLoadingWrapper>
      </Styled.SongList>
    );
  }

  return (
    <Styled.SongList>
      {songList.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          inMyList={song.id in myList}
          onToggleMyList={handleToggleMyListButton}
        />
      ))}
      <Styled.ListItemLoadingWrapper>
        {isLoading && <Loading />}
      </Styled.ListItemLoadingWrapper>
    </Styled.SongList>
  );
};
