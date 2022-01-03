import {Box} from 'components/_common';
import useMediaQuery from 'hooks/useMediaQuery';
import React, {useMemo} from 'react';
import {breakPoint} from 'styles/units';
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
  const {matches} = useMediaQuery(`(max-width: ${breakPoint.mobile})`);

  return (
    <Box margin={matches ? 'auto -12px' : ''}>
      <SongTableHeader isMobile={matches} />
      <SongTableBody songList={songList} isMobile={matches} />
      <SongTableFooter isLoading={isLoading} isEmpty={isEmpty} />
    </Box>
  );
};

export default SongTable;
