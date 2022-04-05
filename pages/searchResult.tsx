import type {GetServerSideProps} from 'next';
import type {SearchFilter} from 'types';
import useSearchResult from 'hooks/pages/useSearchResult';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import {Article} from 'components/article';
import {SongList} from 'components/songList';
import {getSearchResultTitle} from 'utils/getSearchResultTitle';
import {NoResult} from 'components/noResult';
import {MyListProvider} from 'contexts/MyListContext';

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
