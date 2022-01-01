import {Heading} from 'components/heading';
import {Article, Main} from 'components/pageWrapper';
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

  return (
    <Main>
      <Article>
        <Stack spacing='24px'>
          <Heading>{`'${keyword}' 검색 결과`}</Heading>
          <SongTable songList={songList} isLoading={isLoading} />
        </Stack>
      </Article>
    </Main>
  );
};

export default SearchResult;
