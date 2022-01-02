import usePagination from './hooks/usePagination';
import PageNavButton from './PageNavButton';
import {PageNavWrapper} from './styles';

interface Props {
  page: number;
  maxPage: number;
  setPage: (page: number) => void;
}

const PageNav = (props: Props) => {
  const {page, maxPage, setPage} = props;
  const {firstPage, lastPage, isFirstPages, isLastPages, pages} = usePagination(
    page,
    maxPage
  );

  return (
    <PageNavWrapper>
      <PageNavButton
        label='<'
        isDisabled={isFirstPages}
        onClick={() => setPage(firstPage - 1)}
      />
      {pages.map((item, index) => (
        <PageNavButton
          key={index}
          label={item}
          isSelected={item === page}
          onClick={() => setPage(item)}
        />
      ))}
      <PageNavButton
        label='>'
        isDisabled={isLastPages}
        onClick={() => setPage(lastPage + 1)}
      />
    </PageNavWrapper>
  );
};

export default PageNav;
