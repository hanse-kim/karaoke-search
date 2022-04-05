import useMyList from 'hooks/pages/useMyList';
import {MyList as MyListView} from 'views/myList';

const MyList = () => {
  const {myList, isLoading} = useMyList();

  return <MyListView songList={myList} isLoading={isLoading} />;
};

export default MyList;
