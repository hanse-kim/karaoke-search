import {EmptyPage} from 'components/emptyPage';
import {Heading} from 'components/heading';
import {PageNav} from 'components/pageNav';
import {PageWrapper} from 'components/pageWrapper';
import {SongTable} from 'components/songTable';
import {Flex, Stack} from 'components/_common';
import {usePaginatedData} from 'hooks/usePaginatedData';
import {useState} from 'react';
import {Song} from 'types';
import MyListFilter, {MyListFilterType} from './MyListFilter';

interface Props {
  songList: Song[];
  isLoading?: boolean;
}

const MyList = (props: Props) => {
  const {songList, isLoading} = props;
  const [selected, setSelected] = useState<MyListFilterType>('ALL');
  const {page, setPage, maxPage, paginatedData} = usePaginatedData(songList);

  if (!isLoading && songList.length === 0) {
    return (
      <PageWrapper>
        <Stack spacing='24px'>
          <Heading>마이리스트</Heading>
          <EmptyPage
            text={
              '마이리스트가 비어 있습니다!\n노래를 검색 후 마이리스트에 추가해 보세요!'
            }
          />
        </Stack>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Stack spacing='12px'>
        <Heading>마이리스트</Heading>
        <MyListFilter selected={selected} setSelected={setSelected} />
        <SongTable songList={paginatedData} isLoading={isLoading} />
        <Flex justifyContent='center' alignItems='center'>
          <PageNav currPage={page} maxPage={maxPage} setPage={setPage} />
        </Flex>
      </Stack>
    </PageWrapper>
  );
};

export default MyList;
