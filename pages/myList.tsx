import {Article} from 'components/article';
import {MyList} from 'components/myList';
import {MyListProvider} from 'contexts/MyListContext';
import {useRouter} from 'next/router';
import {isMyListFilter} from 'utils/type-guard/isMyListFilter';

interface Props {}

const MyListPage = ({}: Props) => {
  const router = useRouter();
  const myListFilter = {
    karaoke: router.query.karaoke || 'ALL',
    sortBy: router.query.sortBy || 'ADDED_AT',
    sorting: router.query.sorting || 'DESC',
    page: Number(router.query.page) || 1,
  };

  return (
    <Article title='마이리스트'>
      <MyListProvider>
        {isMyListFilter(myListFilter) && <MyList filter={myListFilter} />}
      </MyListProvider>
    </Article>
  );
};

export default MyListPage;
