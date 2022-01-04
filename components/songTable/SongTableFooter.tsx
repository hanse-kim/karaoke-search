import {Divider} from 'components/divider';
import {Box} from 'components/_common';
import React from 'react';
import SongTableItemLoading from './SongTableItemLoading';

interface Props {
  isLoading?: boolean;
  isEmpty?: boolean;
}

const SongTableFooter = (props: Props) => {
  const {isLoading, isEmpty} = props;

  if (isLoading) {
    return (
      <Box>
        {props.isLoading && (
          <React.Fragment>
            {!props.isEmpty && <Divider variant='thick' />}
            <SongTableItemLoading />
          </React.Fragment>
        )}
      </Box>
    );
  }

  return (
    <Box>
      <Divider variant='thick' />
    </Box>
  );
};

export default SongTableFooter;
