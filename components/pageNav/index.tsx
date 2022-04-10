import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import * as Styled from './styled';

export interface PageButtonProps {
  page: number;
  label?: string;
  disabled?: boolean;
  selected?: boolean;
  setPage: (page: number, callback: (page?: number) => void) => void;
}

interface Props {
  currPage: number;
  lastPage: number;
  setPage: (page: number) => void;
  navLength?: number;
  navDisplayType?: NavDisplayType;
  pageNavComponent?: React.FC;
  pageButtonComponent: React.FC<PageButtonProps>;
}

type NavDisplayType = 'fixed' | 'centered';

export const PageNav = React.memo(
  ({
    currPage,
    lastPage,
    setPage,
    navLength = 10,
    navDisplayType = 'fixed',
    pageNavComponent: PageNavTemplate,
    pageButtonComponent: PageButton,
  }: Props) => {
    const {pageList} = usePageNav(
      currPage,
      lastPage,
      navLength,
      navDisplayType
    );
    if (!PageNavTemplate) PageNavTemplate = Styled.PageNav;

    return (
      <PageNavTemplate>
        <PageButton
          label='<'
          page={pageList[0] - 1}
          setPage={setPage}
          disabled={pageList[0] === 1}
        />
        {pageList.map((page) => (
          <PageButton
            page={page}
            setPage={setPage}
            selected={currPage === page}
            key={page}
          />
        ))}
        <PageButton
          label='>'
          page={pageList[pageList.length - 1] + 1}
          setPage={setPage}
          disabled={pageList[pageList.length - 1] === lastPage}
        />
      </PageNavTemplate>
    );
  }
);

const usePageNav = (
  currPage: number,
  lastPage: number,
  navLength: number,
  navDisplayType: NavDisplayType
) => {
  const [pageList, setPageNavList] = useState<number[]>([]);

  useEffect(() => {
    let firstPageInNav: number, lastPageInNav: number;
    switch (navDisplayType) {
      case 'fixed': {
        firstPageInNav = currPage - ((currPage - 1) % navLength);
        lastPageInNav = firstPageInNav + navLength - 1;
        break;
      }
      case 'centered': {
        firstPageInNav = currPage - Math.floor(navLength / 2);
        lastPageInNav = currPage + Math.floor(navLength / 2);
      }
    }

    firstPageInNav = Math.max(1, firstPageInNav);
    lastPageInNav = Math.min(lastPage, lastPageInNav);
    setPageNavList(_.range(firstPageInNav, lastPageInNav + 1));
  }, [currPage, lastPage, navDisplayType, navLength]);

  return {pageList};
};

PageNav.displayName = 'PageNav';
