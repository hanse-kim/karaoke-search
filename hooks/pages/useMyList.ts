import {useState, useMemo, useEffect, useCallback} from 'react';
import type {Song} from 'types';
import {
  addToStorage,
  getAllFromStorage,
  removeFromStorage,
} from 'utils/localStorage';

interface MyListStorage {
  [key: string]: Song;
}

const MY_LIST = 'my-list';

const useMyList = () => {
  const [isLoading, setLoading] = useState(true);
  const [myListMap, setMyListMap] = useState<MyListStorage>({});
  const [myListDeleteMap, setMyListDeleteMap] = useState<string[]>([]);
  const myList = useMemo(() => Object.values(myListMap), [myListMap]);

  useEffect(() => {
    setMyListMap(getAllFromStorage<Song>(MY_LIST));
    setLoading(false);
  }, []);

  const addSong = useCallback((song: Song) => {
    setMyListMap((myListMap) => ({...myListMap, [song.id]: song}));
    setMyListDeleteMap((myListDeleteMap) =>
      myListDeleteMap.filter((item) => item !== song.id)
    );
    addToStorage(song.id, song, MY_LIST);
  }, []);

  const removeSong = useCallback((songId: string) => {
    setMyListDeleteMap((myListDeleteMap) => [...myListDeleteMap, songId]);
    removeFromStorage(songId, MY_LIST);
  }, []);

  const isSongInMyList = useCallback(
    (songId: string) => {
      return songId in myListMap && !myListDeleteMap.includes(songId);
    },
    [myListMap, myListDeleteMap]
  );

  const toggleSong = useCallback(
    (song: Song, isSongInMyList?: boolean) => {
      if (isSongInMyList) {
        removeSong(song.id);
      } else {
        addSong(song);
      }
    },
    [addSong, removeSong]
  );

  return {myList, isLoading, addSong, removeSong, isSongInMyList, toggleSong};
};

export default useMyList;
