import {useCallback, useEffect, useMemo, useState} from 'react';
import {useRouter} from './useRouter';

interface Options {
  itemsPerPage?: number;
  initialPage?: number;
  withRouting?: boolean;
}

export const usePagination = <T>(
  data: T[],
  {itemsPerPage = 10, initialPage, withRouting = false}: Options = {}
) => {
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  const [currPage, setCurrPage] = useState(initialPage || 1);
  const {pushQuery} = useRouter();

  useEffect(() => {
    if (withRouting) {
      setCurrPage(initialPage || 1);
    }
  }, [withRouting, initialPage]);

  useEffect(() => {
    const startIndex = (currPage - 1) * itemsPerPage;
    const endIndex = currPage * itemsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [data, currPage, itemsPerPage]);

  const lastPage = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [data.length, itemsPerPage]
  );

  const setPage = useCallback(
    async (page: number, callback?: (page?: number) => void) => {
      if (page > lastPage) page = lastPage;
      if (page < 1) page = 1;

      if (withRouting) {
        await pushQuery({page});
        if (callback) {
          callback(page);
        }
      } else {
        setCurrPage(page);
      }
    },
    [lastPage, pushQuery, withRouting]
  );

  return {paginatedData, currPage, setPage, lastPage};
};
