import usePagination from './hooks/usePagination';
import PageNavButton from './PageNavButton';
import {PageNavWrapper} from './styles';

interface Props {
  currPage: number;
  maxPage: number;
  setPage: (page: number) => void;
}

const PageNav = (props: Props) => {
  const {currPage, maxPage, setPage} = props;
  const {firstPage, lastPage, isFirstPages, isLastPages, pages} = usePagination(
    currPage,
    maxPage
  );

  return (
    <PageNavWrapper>
      <PageNavButton
        label='<'
        isDisabled={isFirstPages}
        page={firstPage - 1}
        setPage={setPage}
      />
      {pages.map((item, index) => (
        <PageNavButton
          key={index}
          label={item}
          isSelected={item === currPage}
          page={item}
          setPage={setPage}
        />
      ))}
      <PageNavButton
        label='>'
        isDisabled={isLastPages}
        page={lastPage + 1}
        setPage={setPage}
      />
    </PageNavWrapper>
  );
};

export default PageNav;
