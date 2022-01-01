import {Divider} from 'components/divider';
import {Box} from 'components/_common';
import React from 'react';
import {Song} from 'types';
import SongTableItem from './SongTableItem';

interface Props {
  songList: Song[];
}

const SongTableBody = (props: Props) => {
  return (
    <Box>
      {props.songList.map((item, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <Divider />}
          <SongTableItem song={item} />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SongTableBody;
