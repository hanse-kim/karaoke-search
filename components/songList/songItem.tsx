import {useMyList} from 'contexts/MyListContext';
import React, {useCallback, useEffect} from 'react';
import {Song} from 'types';
import {MyListButton} from './myListButton';
import {
  Buttons,
  ListItem,
  Singer,
  SongInfo,
  SongItemWrapper,
  SongNumber,
} from './styles';

interface Props {
  song: Song;
  inMyList?: boolean;
  onToggleMyList?: (song: Song, inMyList?: boolean) => void;
}

export const SongItem = React.memo(
  ({song, inMyList, onToggleMyList}: Props) => {
    const handleToggleMyList = () => {
      onToggleMyList && onToggleMyList(song, inMyList);
    };

    return (
      <ListItem>
        <SongItemWrapper>
          <SongNumber>{song.number}</SongNumber>
          <SongInfo>
            <div>{song.title}</div>
            <Singer>{song.singer}</Singer>
          </SongInfo>
          <Buttons>
            <MyListButton inMyList={inMyList} onClick={handleToggleMyList} />
          </Buttons>
        </SongItemWrapper>
      </ListItem>
    );
  }
);

SongItem.displayName = 'SongItem';
