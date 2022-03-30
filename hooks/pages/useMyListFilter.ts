import {useEffect, useReducer, useState} from 'react';
import {Karaoke, MyListSong} from 'types';
import {getFromStorage} from 'utils/localStorage';

type FilterKaraoke = 'ALL' | Karaoke;
type FilterSort = 'CREATED_AT' | 'TITLE' | 'NUMBER';
type FilterOrder = 'ASC' | 'DESC';

interface MyListFilter {
  karaoke: FilterKaraoke;
  sort: FilterSort;
  order: FilterOrder;
}

type Action =
  | {type: 'REPLACE'; payload: MyListFilter}
  | {type: 'KARAOKE'; payload: string}
  | {type: 'SORT'; payload: string}
  | {type: 'ORDER'; payload: string};

const MY_LIST_FILTER = 'my-list-filter';

const initialFilter: MyListFilter = Object.freeze({
  karaoke: 'ALL',
  sort: 'CREATED_AT',
  order: 'ASC',
});

const reducer = (state: MyListFilter, action: Action) => {
  switch (action.type) {
    case 'REPLACE':
      return action.payload;
    case 'KARAOKE':
      if (!state) return initialFilter;
      return {...state, karaoke: action.payload as FilterKaraoke};
    case 'SORT':
      if (!state) return initialFilter;
      return {...state, sort: action.payload as FilterSort};
    case 'ORDER':
      if (!state) return initialFilter;
      return {...state, order: action.payload as FilterOrder};
  }
};

const useMyListFilter = (songList: MyListSong[]) => {
  const [filter, dispatch] = useReducer(reducer, initialFilter);
  const [filteredSongList, setFilteredSongList] = useState<MyListSong[]>([]);

  useEffect(() => {
    const storageFilter = getFromStorage(MY_LIST_FILTER);
    dispatch({type: 'REPLACE', payload: storageFilter || initialFilter});
  }, []);

  useEffect(() => {
    setFilteredSongList(() => {
      const filtered = songList.filter(
        (song) => filter.karaoke === 'ALL' || filter.karaoke === song.karaoke
      );
      const sorted = filtered.sort((a, b) =>
        filter.sort === 'CREATED_AT'
          ? a.createdAt - b.createdAt
          : filter.sort === 'NUMBER'
          ? parseInt(a.number) - parseInt(b.number)
          : filter.sort === 'TITLE'
          ? a.title > b.title
            ? 1
            : -1
          : -1
      );
      return filter.order === 'ASC' ? sorted : sorted.reverse();
    });
  }, [filter, songList]);

  return {filter, applyFilter: dispatch, filteredSongList};
};

export default useMyListFilter;
