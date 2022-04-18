import {
  Dispatch,
  Reducer,
  SetStateAction,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';

type StorageType = 'local' | 'session';
type UpdateData<S> = (newData: S) => void;

const useStorage = <T>(
  key: string,
  defaultValue: T,
  storageType: StorageType = 'local'
): [T | null, (data: T) => void] => {
  const storage = useRef<Storage | null>(null);
  const [dataState, setDataState] = useState<T | null>(defaultValue);

  useEffect(() => {
    if (storageType === 'local') {
      storage.current = localStorage;
    } else if (storageType === 'session') {
      storage.current = sessionStorage;
    }
  }, [storageType]);

  useEffect(() => {
    if (storage.current === null) return;
    const data = storage.current.getItem(key);
    if (data !== null) {
      const parsed = JSON.parse(data) as T;
      setDataState(parsed);
    } else {
      setDataState(defaultValue);
    }
  }, [defaultValue, key, storage]);

  const updateStorage = useCallback(
    (data: T) => {
      if (!data || storage.current === null) return;
      storage.current.setItem(key, JSON.stringify(data));
    },
    [key, storage]
  );

  return [dataState, updateStorage];
};

export const useStorageState = <S = unknown>(
  key: string,
  initialState: S,
  storageType: StorageType = 'local'
): [S, Dispatch<SetStateAction<S>>, UpdateData<S>] => {
  const [data, updateData] = useStorage(key, initialState, storageType);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (data !== null) {
      setState(data);
    }
  }, [data]);

  return [state, setState, updateData];
};

export const useStorageReducer = <S, A>(
  key: string,
  initialState: S,
  reducer: Reducer<S, A>,
  initializer: (state: S) => A,
  storageType: StorageType = 'local'
): [S, Dispatch<A>, UpdateData<S>] => {
  const [data, updateData] = useStorage(key, initialState, storageType);
  const [state, dispatch] = useReducer<(state: S, action: A) => S>(
    reducer,
    initialState
  );

  useEffect(() => {
    if (data === null) return;
    dispatch(initializer(data));
  }, [data, initializer]);

  return [state, dispatch, updateData];
};
