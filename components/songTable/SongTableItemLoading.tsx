import {Spinner} from 'components/loader';
import {SongTableItemWrapper} from './styles';

const SongTableItemLoading = () => {
  return (
    <SongTableItemWrapper>
      <Spinner />
    </SongTableItemWrapper>
  );
};

export default SongTableItemLoading;
