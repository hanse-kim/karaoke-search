import React from 'react';
import {Song} from 'types';
import {MyListButton} from './myListButton';
import * as Styled from './styled';

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
      <Styled.ListItem>
        <Styled.SongItem>
          <Styled.SongNumber>{song.number}</Styled.SongNumber>
          <Styled.SongInfo>
            <div>{song.title}</div>
            <Styled.Singer>{song.singer}</Styled.Singer>
          </Styled.SongInfo>
          <Styled.Buttons>
            <MyListButton inMyList={inMyList} onClick={handleToggleMyList} />
          </Styled.Buttons>
        </Styled.SongItem>
      </Styled.ListItem>
    );
  }
);

SongItem.displayName = 'SongItem';
