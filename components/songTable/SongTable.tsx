import {Box} from 'components/_common';
import { SongTableContextProvider } from 'contexts/SongTableContext';
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
  displayRanking?: boolean;
}

export const SongTable = (props: Props) => {
  const {songList, isLoading, displayRanking} = props;
  const isEmpty = useMemo(() => songList.length === 0, [songList.length]);
  const {matches} = useMediaQuery(`(max-width: ${breakPoint.mobile})`);

  return (
    <Box margin={matches ? 'auto -12px' : ''}>
      <SongTableContextProvider value={{isMobile: matches, displayRanking}}>
        <SongTableHeader />
        <SongTableBody songList={songList} />
        <SongTableFooter isLoading={isLoading} isEmpty={isEmpty} />
      </SongTableContextProvider>
    </Box>
  );
};

export default SongTable;
