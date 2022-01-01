import {Divider} from 'components/divider';
import {Box, Flex} from 'components/_common';
import React from 'react';
import SongTableItemEmpty from './SongTableItemEmpty';
import SongTableItemLoading from './SongTableItemLoading';

interface Props {
  isLoading?: boolean;
  isEmpty?: boolean;
}

const SongTableFooter = (props: Props) => {
  const {isLoading, isEmpty} = props;

  if (!isLoading && isEmpty) {
    return (
      <Box>
        <SongTableItemEmpty />
        <Divider variant='thick' />
      </Box>
    );
  }

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
