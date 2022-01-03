import {
  EmptyHeartIconButton,
  FilledHeartIconButton,
} from 'components/iconButton';
import {Stack} from 'components/_common';
import React from 'react';
import type {Song} from 'types';
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
  onClickSong: (song: Song) => void;
  isMobile?: boolean;
}

const SongTableItem = (props: Props) => {
  const {song, inMyList, onClickSong, isMobile} = props;
  const {karaoke, number, title, singer} = song;

  if (isMobile) {
    return (
      <SongTableItemWrapper>
        <Stack spacing='8px' flex={1}>
          <SongNumberCell>{`${karaoke}_${number}`}</SongNumberCell>
          <SongTitleCell>
            <Stack spacing='4px'>
              <TitleText>{title}</TitleText>
              <SingerText>{singer}</SingerText>
            </Stack>
          </SongTitleCell>
        </Stack>
        <MyListCell
          onClick={() => {
            onClickSong(song);
          }}
        >
          {inMyList ? <FilledHeartIconButton /> : <EmptyHeartIconButton />}
        </MyListCell>
      </SongTableItemWrapper>
    );
  }

  return (
    <SongTableItemWrapper>
      <SongNumberCell>{`${karaoke}_${number}`}</SongNumberCell>
      <SongTitleCell>
        <Stack spacing='4px'>
          <TitleText>{title}</TitleText>
          <SingerText>{singer}</SingerText>
        </Stack>
      </SongTitleCell>
      <MyListCell
        onClick={() => {
          onClickSong(song);
        }}
      >
        {inMyList ? <FilledHeartIconButton /> : <EmptyHeartIconButton />}
      </MyListCell>
    </SongTableItemWrapper>
  );
};

export default React.memo(SongTableItem);
