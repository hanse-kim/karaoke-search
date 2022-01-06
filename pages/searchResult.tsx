import {Main} from 'components/pageWrapper';
import {MyListContextProvider} from 'contexts/MyListContext';
import useMyList from 'hooks/pages/useMyList';
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
  const {toggleSong, isSongInMyList} = useMyList();

  return (
    <div className='container'>
      <Header />
      <Main>
        <MyListContextProvider value={{toggleSong, isSongInMyList}}>
          <SearchResultView
            keyword={props.keyword}
            songList={songList}
            isLoading={isLoading}
          />
        </MyListContextProvider>
      </Main>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {props: {...context.query}};
};

export default SearchResult;
