import {createContext} from 'react';

export interface SongTableContextType {
  isMobile?: boolean;
  displayRanking?: boolean;
}

export const SongTableContext = createContext<SongTableContextType>({});

export const SongTableContextProvider = SongTableContext.Provider;
