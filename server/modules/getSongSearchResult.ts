import {gql} from 'apollo-server-micro';
import {SearchFilter, Song} from 'types';

const typeDefs = gql`
  extend type Query {
    getSongSearchResult(filter: SearchFilter): [Song]!
  }

  type Song {
    number: String!
    title: String!
    singer: String!
    karaoke: Karaoke!
  }

  input SearchFilter {
    searchBy: SearchBy = TITLE
    keyword: String!
    karaoke: Karaoke!
    page: Int!
  }

  enum Karaoke {
    KY
    TJ
  }

  enum SearchBy {
    NUMBER
    TITLE
    SINGER
  }
`;

const resolvers = {
  Query: {
    getSongSearchResult: async (
      _: unknown,
      args: {filter: SearchFilter}
    ): Promise<Song[]> => {
      console.log(args);
      return dummySongList;
    },
  },
};

export default {typeDefs, resolvers};

const dummySongList: Song[] = [
  {
    title: '노래1',
    number: '1234',
    karaoke: 'TJ',
    singer: '가수1',
  },
  {
    title: '노래2',
    number: '1554',
    karaoke: 'TJ',
    singer: '가수1',
  },
  {
    title: '노래3',
    number: '1235',
    karaoke: 'TJ',
    singer: '가수2',
  },
  {
    title: '노래4',
    number: '1126',
    karaoke: 'TJ',
    singer: '가수3',
  },
];
