import {gql, useQuery} from '@apollo/client';
import type {Karaoke, Song} from 'types';

const GET_SONG_LIST_POPULAR = gql`
  query getSongListPopular($karaoke: Karaoke) {
    songListPopular(karaoke: $karaoke) {
      id
      title
      number
      singer
      karaoke
    }
  }
`;

interface Data {
  songListPopular: Song[];
}

interface Vars {
  karaoke: Karaoke;
}

const usePopularSongs = (karaoke: Karaoke) => {
  const {loading: isLoading, data} = useQuery<Data, Vars>(
    GET_SONG_LIST_POPULAR,
    {
      variables: {
        karaoke,
      },
    }
  );

  return {isLoading, songList: data ? data.songListPopular.slice(0,10) : []};
};

export default usePopularSongs;
