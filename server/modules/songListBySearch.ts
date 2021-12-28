import {gql} from 'apollo-server-micro';
import {getSearchResult} from 'server/utils/karaokeScrapper';
import type {SearchFilter, Song} from 'types';

const typeDefs = gql`
  extend type Query {
    songListBySearch(filter: SearchFilter): [Song]!
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
    songListBySearch: async (
      _: unknown,
      args: {filter: SearchFilter}
    ): Promise<Song[]> => {
      return await getSearchResult(args.filter);
    },
  },
};

export default {typeDefs, resolvers};
