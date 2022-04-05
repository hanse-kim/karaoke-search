import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export const useStorage = <T>(
  key: string,
  defaultValue: T,
  storageType: 'local' | 'session' = 'local'
): [T | null, (data: T) => void] => {
  const [state, setState] = useState<T | null>(null);
  const storage = useRef<Storage | null>(null);

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
      setState(parsed);
    } else {
      setState(defaultValue);
    }
  }, [defaultValue, key, storage]);

  const updateStorage = useCallback(
    (data: T) => {
      if (!data || storage.current === null) return;
      storage.current.setItem(key, JSON.stringify(data));
    },
    [key, storage]
  );

  return [state, updateStorage];
};
