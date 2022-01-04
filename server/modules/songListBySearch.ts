import {gql} from 'apollo-server-micro';
import {getSearchResult} from 'server/utils/karaokeScrapper';
import type {GQLSearchFilter, Song} from 'types';

const typeDefs = gql`
  extend type Query {
    songListBySearch(filter: SearchFilter): [Song]!
  }
`;

const resolvers = {
  Query: {
    songListBySearch: async (
      _: unknown,
      args: {filter: GQLSearchFilter}
    ): Promise<Song[]> => {
      return await getSearchResult(args.filter);
    },
  },
};

const songListBySearch = {typeDefs, resolvers};

export default songListBySearch;
