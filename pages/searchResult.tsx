import type {GetServerSideProps} from 'next';
import {MyListProvider} from 'contexts/MyListContext';
import useSearchResult from 'hooks/pages/useSearchResult';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import {Article} from 'components/article';
import {SongList} from 'components/songList';
import {NoResult} from 'components/noResult';
import type {SearchFilter} from 'types';
import {getSearchResultTitle} from 'utils/getSearchResultTitle';

interface Props {
  searchFilter: SearchFilter;
}

const SearchResultPage = ({searchFilter}: Props) => {
  const {isEnded, isLoading, songList, fetchMore} =
    useSearchResult(searchFilter);
  useInfiniteScroll(fetchMore, isEnded || isLoading);
  const searchResultTitle = getSearchResultTitle(searchFilter);

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
  const searchFilter = context.query;
  const searchFilterKeys = ['karaoke', 'keyword', 'searchBy'];
  if (searchFilterKeys.some((key) => searchFilter[key] === undefined)) {
    return {
      redirect: {
        destination: process.env.NEXT_PUBLIC_HOME || '/',
        permanent: false,
      },
    };
  }

  return {props: {searchFilter}};
};

export default SearchResultPage;
