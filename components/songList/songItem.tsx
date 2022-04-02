import {RippleButton} from 'components/rippleButton';
import {Song} from 'types';
import {Buttons, Singer, SongItemWrapper, SongNumber} from './styles';

interface Props {
  song: Song;
  inMylist?: boolean;
}

export const SongItem = ({song, inMylist}: Props) => {
  return (
    <SongItemWrapper>
      <SongNumber>{song.number}</SongNumber>
      <div>
        <div>{song.title}</div>
        <Singer>{song.singer}</Singer>
      </div>
      <Buttons></Buttons>
    </SongItemWrapper>
  );
};
