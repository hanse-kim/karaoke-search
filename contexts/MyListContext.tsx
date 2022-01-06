import useMyList from 'hooks/pages/useMyList';
import {createContext} from 'react';
import type {Song} from 'types';

export interface MyListContextType {
  toggleSong?: (song: Song, inMyList?: boolean) => void;
  isSongInMyList?: (songId: string) => boolean;
}

interface Props {
  children?: React.ReactNode;
}

export const MyListContext = createContext<MyListContextType>({});

export const MyListContextProvider = MyListContext.Provider;
