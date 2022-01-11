import {Heading} from 'components/heading';
import {Article} from 'components/pageWrapper';
import {SongTable} from 'components/songTable';
import {Flex, Stack} from 'components/_common';
import {Karaoke, Song} from 'types';

interface Props {
  songLists: {
    karaoke: Karaoke;
    songList: Song[];
    isLoading: boolean;
  }[];
}

const Home = (props: Props) => {
  const {songLists} = props;

  return (
    <Article>
      <Stack spacing='36px'>
        {songLists.map((item, index) => (
          <Stack key={index} spacing='24px'>
            <Heading>{`${item.karaoke} 이달의 인기곡`}</Heading>
            <SongTable
              songList={item.songList}
              isLoading={item.isLoading}
              displayRanking
            />
          </Stack>
        ))}
      </Stack>
    </Article>
  );
};

export default Home;
