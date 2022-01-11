import {Divider} from 'components/divider';
import {Box} from 'components/_common';
import {MyListContext} from 'contexts/MyListContext';
import {SongTableContext} from 'contexts/SongTableContext';
import React, {useContext} from 'react';
import type {Song} from 'types';
import SongTableItem from './SongTableItem';

interface Props {
  songList: Song[];
}

const SongTableBody = (props: Props) => {
  const {songList} = props;
  const {isSongInMyList, toggleSong} = useContext(MyListContext);
  const {isMobile, displayRanking} = useContext(SongTableContext);

  return (
    <Box>
      {songList.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <Divider />}
          <SongTableItem
            song={item}
            isMobile={isMobile}
            toggleSong={toggleSong}
            inMyList={isSongInMyList && isSongInMyList(item.id)}
            ranking={displayRanking ? index + 1 : null}
          />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SongTableBody;
