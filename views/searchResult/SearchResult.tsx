import {EmptyPage} from 'components/emptyPage';
import {Heading} from 'components/heading';
import {PageWrapper} from 'components/pageWrapper';
import SongTable from 'components/songTable/SongTable';
import {Stack} from 'components/_common';
import type {Song} from 'types';

interface Props {
  keyword: string;
  songList: Song[];
  isLoading?: boolean;
}

const SearchResult = (props: Props) => {
  const {keyword, songList, isLoading} = props;

  if (!isLoading && songList.length === 0) {
    return (
      <PageWrapper>
        <Stack spacing='24px'>
          <Heading>{`'${keyword}' 검색 결과`}</Heading>
          <EmptyPage text='검색 결과가 없습니다!' />
        </Stack>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Stack spacing='24px'>
        <Heading>{`'${keyword}' 검색 결과`}</Heading>
        <SongTable songList={songList} isLoading={isLoading} />
      </Stack>
    </PageWrapper>
  );
};

export default SearchResult;
