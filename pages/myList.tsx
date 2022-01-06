import {Main} from 'components/pageWrapper';
import {MyListContextProvider} from 'contexts/MyListContext';
import useMyList from 'hooks/pages/useMyList';
import {Footer} from 'views/footer';
import {Header} from 'views/header';
import {MyList as MyListView} from 'views/myList';

const MyList = () => {
  const {myList, isLoading, toggleSong, isSongInMyList} = useMyList();

  return (
    <div className='container'>
      <Header />
      <Main>
        <MyListContextProvider value={{toggleSong, isSongInMyList}}>
          <MyListView songList={myList} isLoading={isLoading} />
        </MyListContextProvider>
      </Main>
      <Footer />
    </div>
  );
};

export default MyList;
