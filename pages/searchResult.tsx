import {Article} from 'components/article';
import {NoResult} from 'components/noResult';
import {SongList} from 'components/songList';
import {MyListProvider} from 'contexts/MyListContext';
import useSearchResult from 'hooks/pages/useSearchResult';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import {useRouter} from 'next/router';
import {SearchFilter} from 'types';
import {getSearchResultTitle} from 'utils/getSearchResultTitle';

interface Props {}

const SearchResultPage = ({}: Props) => {
  const router = useRouter();

  const {isEnded, isLoading, songList, fetchMore} = useSearchResult(
    router.query as any as SearchFilter
  );
  useInfiniteScroll(fetchMore, isEnded || isLoading);
  const searchResultTitle = getSearchResultTitle(
    router.query as any as SearchFilter
  );

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

export default SearchResultPage;
