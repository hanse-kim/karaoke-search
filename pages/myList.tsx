import useMyList from 'hooks/pages/useMyList';
import {Header} from 'views/header';
import {MyList as MyListView} from 'views/myList';

const MyList = () => {
  const {myList, isLoading} = useMyList();

  return (
    <div className='container'>
      <Header />
      <MyListView songList={myList} isLoading={isLoading} />
    </div>
  );
};

export default MyList;
