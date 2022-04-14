import {createContext, useContext, useEffect, Dispatch} from 'react';
import {useStorageReducer} from 'hooks/useStorage';
import type {MyList, Song} from 'types';

interface ContextState {
  myList: MyList;
  dispatch: Dispatch<Action>;
}

interface ProviderProps {
  children?: React.ReactNode;
}

export const MyListContext = createContext<ContextState | null>(null);

const initialState: MyList = {};

type Action =
  | {
      type: 'ADD_SONG';
      payload: {song: Song};
    }
  | {
      type: 'REMOVE_SONG';
      payload: {songId: string};
    }
  | {
      type: 'INITIALIZE';
      payload: {myList: MyList};
    };

const reducer = (state: MyList, action: Action) => {
  switch (action.type) {
    case 'ADD_SONG': {
      const {song} = action.payload;
      return {...state, [song.id]: {...song, createdAt: new Date().getTime()}};
    }
    case 'REMOVE_SONG': {
      const {songId} = action.payload;
      const {[songId]: toDelete, ...newState} = state;
      return newState;
    }
    case 'INITIALIZE': {
      const {myList} = action.payload;
      return myList;
    }
    default: {
      return state;
    }
  }
};

const initializer = (state: MyList): Action => ({
  type: 'INITIALIZE',
  payload: {myList: state},
});

export const MyListProvider = ({children}: ProviderProps) => {
  const [myList, dispatch, updateMyList] = useStorageReducer(
    'my-list',
    initialState,
    reducer,
    initializer
  );

  useEffect(() => {
    if (myList !== initialState) {
      updateMyList(myList);
    }
  }, [myList, updateMyList]);

  return (
    <MyListContext.Provider value={{myList, dispatch}}>
      {children}
    </MyListContext.Provider>
  );
};

export const useMyList = () => {
  const state = useContext(MyListContext);
  if (!state) throw new Error('Cannot find MyListProvider.');
  return state;
};
