import {useState, useMemo, useEffect, useCallback} from 'react';
import type {Song} from 'types';

interface MyListStorage {
  [key: string]: Song;
}

const MY_LIST = 'my-list';

const useMyList = () => {
  const [isLoading, setLoading] = useState(true);
  const [myListMap, setMyListMap] = useState<MyListStorage>({});
  const myList = useMemo(() => Object.values(myListMap), [myListMap]);

  useEffect(() => {
    const myListData = localStorage.getItem(MY_LIST);
    if (myListData) setMyListMap(JSON.parse(myListData));
    setLoading(false);
  }, []);

  const addSong = useCallback((song: Song) => {
    setMyListMap((myListMap) => {
      const newMap = {...myListMap, [song.id]: song};
      localStorage.setItem(MY_LIST, JSON.stringify(newMap));
      return newMap;
    });
  }, []);

  const removeSong = useCallback((songId: string) => {
    setMyListMap((myListMap) => {
      const {[songId]: toDelete, ...newMap} = myListMap;
      localStorage.setItem(MY_LIST, JSON.stringify(newMap));
      return newMap;
    });
  }, []);

  const isSongInMyList = useCallback(
    (songId: string) => {
      return songId in myListMap;
    },
    [myListMap]
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
