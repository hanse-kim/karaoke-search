import useSearchResult from 'hooks/pages/useSearchResult';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import type {GetServerSideProps} from 'next';
import type {SearchFilter} from 'types';
import {Footer} from 'views/footer';
import {Header} from 'views/header';
import {SearchResult as SearchResultView} from 'views/searchResult';

const SearchResult = (props: SearchFilter) => {
  const {isEnded, isLoading, songList, fetchMore} = useSearchResult(props);
  useInfiniteScroll(fetchMore, isEnded || isLoading);

  return (
    <div className='container'>
      <Header />
      <SearchResultView
        keyword={props.keyword}
        songList={songList}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {props: {...context.query}};
};

export default SearchResult;
