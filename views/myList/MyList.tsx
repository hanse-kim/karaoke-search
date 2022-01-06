import {EmptyPage} from 'components/emptyPage';
import {Heading} from 'components/heading';
import {PageNav} from 'components/pageNav';
import { Article } from 'components/pageWrapper';
import {SongTable} from 'components/songTable';
import {Box, Flex, Stack} from 'components/_common';
import {usePaginatedData} from 'hooks/usePaginatedData';
import {useMemo, useState} from 'react';
import {Song} from 'types';
import MyListFilter, {MyListFilterType} from './MyListFilter';

interface Props {
  songList: Song[];
  isLoading?: boolean;
}

const MyList = (props: Props) => {
  const {songList, isLoading} = props;
  const [selected, setSelected] = useState<MyListFilterType>('ALL');
  const filteredSongList = useMemo(() => {
    if (selected === 'ALL') return songList;
    return songList.filter((item) => item.karaoke === selected);
  }, [selected, songList]);
  const {page, setPage, maxPage, paginatedData} =
    usePaginatedData(filteredSongList);

  if (!isLoading && filteredSongList.length === 0) {
    return (
      <Article>
        <Stack spacing='12px'>
          <Heading>마이리스트</Heading>
          <MyListFilter selected={selected} setSelected={setSelected} />
          <EmptyPage
            text={
              '마이리스트가 비어 있습니다!\n노래를 검색 후 마이리스트에 추가해 보세요!'
            }
          />
        </Stack>
      </Article>
    );
  }

  return (
    <Article>
      <Stack spacing='12px'>
        <Heading>마이리스트</Heading>
        <MyListFilter selected={selected} setSelected={setSelected} />
        <SongTable songList={paginatedData} isLoading={isLoading} />
        <Flex justifyContent='center' alignItems='center'>
          <PageNav currPage={page} maxPage={maxPage} setPage={setPage} />
        </Flex>
      </Stack>
    </Article>
  );
};

export default MyList;
