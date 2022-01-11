import React from 'react';
import {
  EmptyHeartIconButton,
  FilledHeartIconButton,
} from 'components/iconButton';
import {Stack} from 'components/_common';
import type {Song} from 'types';
import {
  RankingCell as StyledRankingCell,
  SongNumberCell as StyledSongNumberCell,
  SongTitleCell as StyledSongTitleCell,
  MyListCell as StyledMyListCell,
  SongTableItemWrapper,
  SingerText,
  TitleText,
} from './styles';

interface Props {
  song: Song;
  isMobile?: boolean;
  toggleSong?: (song: Song, inMyList?: boolean) => void;
  inMyList?: boolean;
  ranking: number | null;
}

const SongTableItem = (props: Props) => {
  const {song, isMobile, toggleSong, inMyList, ranking} = props;
  const onClickSong = () => toggleSong && toggleSong(song, inMyList);

  if (isMobile) {
    return (
      <SongTableItemWrapper>
        <RankingCell ranking={ranking} />
        <Stack spacing='8px' flex={1}>
          <SongNumberCell song={song} />
          <SongTitleCell song={song} />
        </Stack>
        <MyListCell inMyList={inMyList} onClickSong={onClickSong} />
      </SongTableItemWrapper>
    );
  }

  return (
    <SongTableItemWrapper>
      <RankingCell ranking={ranking} />
      <SongNumberCell song={song} />
      <SongTitleCell song={song} />
      <MyListCell inMyList={inMyList} onClickSong={onClickSong} />
    </SongTableItemWrapper>
  );
};

const RankingCell = (props: {ranking: number | null}) => {
  const {ranking} = props;
  return ranking ? <StyledRankingCell>{ranking}</StyledRankingCell> : null;
};

const SongNumberCell = (props: {song: Song}) => {
  const {karaoke, number} = props.song;
  return (
    <StyledSongNumberCell>{`(${karaoke}) ${number}`}</StyledSongNumberCell>
  );
};

const SongTitleCell = (props: {song: Song}) => {
  const {title, singer} = props.song;
  return (
    <StyledSongTitleCell>
      <Stack spacing='4px'>
        <TitleText>{title}</TitleText>
        <SingerText>{singer}</SingerText>
      </Stack>
    </StyledSongTitleCell>
  );
};

const MyListCell = (props: {inMyList?: boolean; onClickSong: () => void}) => {
  const {inMyList, onClickSong} = props;

  return (
    <StyledMyListCell onClick={onClickSong}>
      {inMyList ? <FilledHeartIconButton /> : <EmptyHeartIconButton />}
    </StyledMyListCell>
  );
};

export default React.memo(SongTableItem);
