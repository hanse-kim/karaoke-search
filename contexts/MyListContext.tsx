import {useStorage} from 'hooks/useStorage';
import {
  useCallback,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';
import type {MyList, MyListSong, Song} from 'types';

interface ContextState {
  myList: MyList | null;
  addSong: (song: Song) => void;
  removeSong: (songId: string) => void;
}

interface ProviderProps {
  children?: React.ReactNode;
}

export const MyListContext = createContext<ContextState | null>(null);

const defaultMyList: MyList = {};

export const MyListProvider = ({children}: ProviderProps) => {
  const [myList, updateMyList] = useStorage<MyList>('my-list', defaultMyList);
  const [myListState, setMyListState] = useState<MyList | null>(null);

  useEffect(() => {
    if (myList !== null && myListState === null) {
      setMyListState(myList);
    }
  }, [myList, myListState]);

  const addSong = useCallback((song: Song) => {
    setMyListState((prev) => {
      if (prev === null) return null;
      return {...prev, [song.id]: {...song, createdAt: new Date().getTime()}};
    });
  }, []);

  const removeSong = useCallback((songId: string) => {
    setMyListState((prev) => {
      if (prev === null) return null;
      const {[songId]: toDelete, ...newList} = prev;
      return newList;
    });
  }, []);

  useEffect(() => {
    if (myListState === null) return;
    updateMyList(myListState);
  }, [myListState, updateMyList]);

  return (
    <MyListContext.Provider value={{myList: myListState, addSong, removeSong}}>
      {children}
    </MyListContext.Provider>
  );
};

export const useMyList = () => {
  const state = useContext(MyListContext);

  if (!state) throw new Error('Cannot find MyListProvider.');
  return state;
};
