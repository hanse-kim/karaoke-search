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
  const {myList, dispatch} = useMyList();

  const handleToggleMyList = useCallback(
    (song: Song, inMyList?: boolean) => {
      if (inMyList) dispatch({type: 'REMOVE_SONG', payload: {songId: song.id}});
      else dispatch({type: 'ADD_SONG', payload: {song}});
    },
    [dispatch]
  );

  return (
    <Styled.SongList>
      {songList.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          inMyList={song.id in myList}
          onToggleMyList={handleToggleMyList}
        />
      ))}
      <Styled.ListItemLoadingWrapper>
        {isLoading && <Loading />}
      </Styled.ListItemLoadingWrapper>
    </Styled.SongList>
  );
};
