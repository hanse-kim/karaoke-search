import {Article} from 'components/article';
import {MyList} from 'components/myList';
import {MyListProvider} from 'contexts/MyListContext';
import type {GetServerSideProps} from 'next';
import type {MyListFilter} from 'types';

interface Props {
  myListFilter: MyListFilter;
}

const MyListPage = ({myListFilter}: Props) => {
  return (
    <Article title='마이리스트'>
      <MyListProvider>
        <MyList filter={myListFilter} />
      </MyListProvider>
    </Article>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {query} = context;
  const myListFilter = {
    karaoke: query.karaoke || 'ALL',
    sortBy: query.sortBy || 'ADDED_AT',
    sorting: query.sorting || 'DESC',
    page: Number(query.page) || 1,
  };

  return {props: {myListFilter}};
};

export default MyListPage;
