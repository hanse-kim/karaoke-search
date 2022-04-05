import type {GetServerSideProps} from 'next';
import {MyListProvider} from 'contexts/MyListContext';
import useSearchResult from 'hooks/pages/useSearchResult';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import {Article} from 'components/article';
import {SongList} from 'components/songList';
import {NoResult} from 'components/noResult';
import type {SearchFilter} from 'types';
import {getSearchResultTitle} from 'utils/getSearchResultTitle';

const SearchResultPage = (props: SearchFilter) => {
  const {isEnded, isLoading, songList, fetchMore} = useSearchResult(props);
  useInfiniteScroll(fetchMore, isEnded || isLoading);
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
      <MyListProvider>
        <SongList songList={songList} isLoading={isLoading} />
      </MyListProvider>
    </Article>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {props: {...context.query}};
};

export default SearchResultPage;
