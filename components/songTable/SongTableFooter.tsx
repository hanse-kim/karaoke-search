import {Divider} from 'components/divider';
import {Box} from 'components/_common';
import React from 'react';
import SongTableItemLoading from './SongTableItemLoading';

interface Props {
  isLoading?: boolean;
  isEmpty?: boolean;
}

const SongTableFooter = (props: Props) => {
  return (
    <Box>
      {props.isLoading && (
        <React.Fragment>
          {!props.isEmpty && <Divider />}
          <SongTableItemLoading />
        </React.Fragment>
      )}
      <Divider variant='thick' />
    </Box>
  );
};

export default SongTableFooter;
