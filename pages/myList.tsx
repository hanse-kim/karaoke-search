import {MyListContextProvider} from 'contexts/MyListContext';
import useMyList from 'hooks/pages/useMyList';
import {MyList as MyListView} from 'views/myList';

const MyList = () => {
  const {myList, isLoading, toggleSong, isSongInMyList} = useMyList();

  return (
      <MyListContextProvider value={{toggleSong, isSongInMyList}}>
        <MyListView songList={myList} isLoading={isLoading} />
      </MyListContextProvider>
  );
};

export default MyList;
