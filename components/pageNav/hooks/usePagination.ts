import {useMemo} from 'react';
import range from 'utils/range';

const MIN_PAGE = 1;

const usePagination = (
  page: number,
  maxPage: number,
  pageCountPerPages = 10
) => {
  const firstPage = useMemo(
    () =>
      Math.floor((page - MIN_PAGE) / pageCountPerPages) * pageCountPerPages +
      MIN_PAGE,
    [page, pageCountPerPages]
  );

  const lastPage = useMemo(
    () =>
      Math.min(
        Math.floor((page - MIN_PAGE) / pageCountPerPages) * pageCountPerPages +
          pageCountPerPages,
        maxPage
      ),
    [maxPage, page, pageCountPerPages]
  );

  const pages = useMemo(
    () => range(firstPage, lastPage + 1),
    [firstPage, lastPage]
  );

  const isFirstPages = useMemo(() => MIN_PAGE === firstPage, [firstPage]);

  const isLastPages = useMemo(() => maxPage === lastPage, [lastPage, maxPage]);

  return {firstPage, lastPage, isFirstPages, isLastPages, pages};
};

export default usePagination;
