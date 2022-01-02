import {useMemo, useState} from 'react';

export const usePaginatedData = <T>(data: T[], itemCountPerPage = 10) => {
  const [page, setPage] = useState(1);

  const maxPage = useMemo(
    () => Math.max(Math.floor(data.length / itemCountPerPage), 1),
    [data.length, itemCountPerPage]
  );

  const paginatedData = useMemo(
    () => data.slice((page - 1) * itemCountPerPage, page * itemCountPerPage),
    [data, itemCountPerPage, page]
  );

  return {page, setPage, maxPage, paginatedData};
};
