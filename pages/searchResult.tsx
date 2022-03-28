import {MyListContextProvider} from 'contexts/MyListContext';
import useMyList from 'hooks/pages/useMyList';
import useSearchResult from 'hooks/pages/useSearchResult';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import type {GetServerSideProps} from 'next';
import type {SearchFilter} from 'types';
import {SearchResult as SearchResultView} from 'views/searchResult';

const SearchResult = (props: SearchFilter) => {
  const {isEnded, isLoading, songList, fetchMore} = useSearchResult(props);
  useInfiniteScroll(fetchMore, isEnded || isLoading);
  const {toggleSong, isSongInMyList} = useMyList();

  return (
      <MyListContextProvider value={{toggleSong, isSongInMyList}}>
        <SearchResultView
          keyword={props.keyword}
          songList={songList}
          isLoading={isLoading}
        />
      </MyListContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {props: {...context.query}};
};

export default SearchResult;
