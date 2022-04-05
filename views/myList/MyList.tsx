import {PageNav} from 'components/pageNav';
import {Article} from 'components/article';
import {SongList} from 'components/songList';
import {usePaginatedData} from 'hooks/usePaginatedData';
import {useMemo, useState} from 'react';
import {Song} from 'types';
import MyListFilter, {MyListFilterType} from './MyListFilter';
import { MyListProvider } from 'contexts/MyListContext';

interface Props {
  songList: Song[];
  isLoading?: boolean;
}

const MyList = (props: Props) => {
  const {songList, isLoading} = props;
  const [filterSelected, setFilterSelected] = useState<MyListFilterType>('ALL');
  const filteredSongList = useMemo(() => {
    if (filterSelected === 'ALL') return songList;
    return songList.filter((item) => item.karaoke === filterSelected);
  }, [filterSelected, songList]);
  const {page, setPage, maxPage, paginatedData} =
    usePaginatedData(filteredSongList);

  if (!isLoading && filteredSongList.length === 0) {
    return (
      <Article title='마이리스트'>
        <MyListFilter
          selected={filterSelected}
          setSelected={setFilterSelected}
        />
      </Article>
    );
  }

  return (
    <Article title='마이리스트'>
      <MyListFilter selected={filterSelected} setSelected={setFilterSelected} />
      <MyListProvider>
        <SongList songList={paginatedData} isLoading={isLoading} />
      </MyListProvider>
      <div>
        <PageNav currPage={page} maxPage={maxPage} setPage={setPage} />
      </div>
    </Article>
  );
};

export default MyList;
