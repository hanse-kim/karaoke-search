import {Main} from 'components/pageWrapper';
import {MyListContextProvider} from 'contexts/MyListContext';
import useMyList from 'hooks/pages/useMyList';
import usePopularSongs from 'hooks/pages/usePopularSongs';
import {Footer} from 'views/footer';
import {Header} from 'views/header';
import {Home as HomeView} from 'views/home';

const Home = () => {
  const {toggleSong, isSongInMyList} = useMyList();
  const {songList: songListTJ, isLoading: isLoadingTJ} = usePopularSongs('TJ');
  const {songList: songListKY, isLoading: isLoadingKY} = usePopularSongs('KY');

  return (
    <div className='container'>
      <Header />
      <Main>
        <MyListContextProvider value={{toggleSong, isSongInMyList}}>
          <HomeView
            songLists={[
              {karaoke: 'TJ', songList: songListTJ, isLoading: isLoadingTJ},
              {karaoke: 'KY', songList: songListKY, isLoading: isLoadingKY},
            ]}
          />
        </MyListContextProvider>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
