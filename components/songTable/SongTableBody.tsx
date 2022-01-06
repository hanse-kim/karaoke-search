import {Divider} from 'components/divider';
import {Box} from 'components/_common';
import {MyListContext} from 'contexts/MyListContext';
import React, {useContext} from 'react';
import type {Song} from 'types';
import SongTableItem from './SongTableItem';

interface Props {
  songList: Song[];
  isMobile?: boolean;
}

const SongTableBody = (props: Props) => {
  const {songList, isMobile} = props;
  const {isSongInMyList, toggleSong} = useContext(MyListContext);

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
          />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SongTableBody;
