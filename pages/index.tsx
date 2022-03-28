import {MyListContextProvider} from 'contexts/MyListContext';
import useMyList from 'hooks/pages/useMyList';
import usePopularSongs from 'hooks/pages/usePopularSongs';
import {Home as HomeView} from 'views/home';

const Home = () => {
  const {toggleSong, isSongInMyList} = useMyList();
  const {songList: songListTJ, isLoading: isLoadingTJ} = usePopularSongs('TJ');
  const {songList: songListKY, isLoading: isLoadingKY} = usePopularSongs('KY');

  return null;
};

export default Home;
