import {Box} from 'components/_common';
import React, {useMemo} from 'react';
import type {Song} from 'types';
import SongTableBody from './SongTableBody';
import SongTableFooter from './SongTableFooter';
import SongTableHeader from './SongTableHeader';

interface Props {
  songList: Song[];
  isLoading?: boolean;
}

export const SongTable = (props: Props) => {
  const {songList, isLoading} = props;
  const isEmpty = useMemo(() => songList.length === 0, [songList.length]);

  return (
    <Box>
      <SongTableHeader />
      <SongTableBody songList={songList} />
      <SongTableFooter isLoading={isLoading} isEmpty={isEmpty} />
    </Box>
  );
};

export default SongTable;
