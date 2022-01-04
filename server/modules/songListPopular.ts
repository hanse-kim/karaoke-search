import {gql} from 'apollo-server-micro';
import {getPopluar} from 'server/utils/karaokeScrapper';
import type {Karaoke, Song} from 'types';

const typeDefs = gql`
  extend type Query {
    songListPopular(karaoke: Karaoke): [Song]!
  }
`;

const resolvers = {
  Query: {
    songListPopular: async (
      _: unknown,
      args: {karaoke: Karaoke}
    ): Promise<Song[]> => {
      return await getPopluar(args.karaoke);
    },
  },
};

const songListPopular = {typeDefs, resolvers};

export default songListPopular;
