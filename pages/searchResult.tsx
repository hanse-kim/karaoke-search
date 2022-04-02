import type {GetServerSideProps} from 'next';
import type {SearchFilter} from 'types';
import {MyListContextProvider} from 'contexts/MyListContext';
import useMyList from 'hooks/pages/useMyList';
import useSearchResult from 'hooks/pages/useSearchResult';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import {Article} from 'components/article';
import {SongList} from 'components/songList';
import {getSearchResultTitle} from 'utils/getSearchResultTitle';
import {NoResult} from 'components/noResult.ts';

const SearchResult = (props: SearchFilter) => {
  const {isEnded, isLoading, songList, fetchMore} = useSearchResult(props);
  useInfiniteScroll(fetchMore, isEnded || isLoading);
  const {toggleSong, isSongInMyList} = useMyList();
  const searchResultTitle = getSearchResultTitle(props);

  if (!isLoading && songList.length === 0) {
    return (
      <Article title={searchResultTitle}>
        <NoResult />
      </Article>
    );
  }

  return (
    <Article title={searchResultTitle}>
      <MyListContextProvider value={{toggleSong, isSongInMyList}}>
        <SongList songList={songList} isLoading={isLoading} />
      </MyListContextProvider>
    </Article>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {props: {...context.query}};
};

export default SearchResult;
