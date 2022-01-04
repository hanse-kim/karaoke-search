import {gql} from 'apollo-server-micro';
import combineModules from 'server/utils/combineModules';
import songListBySearch from './songListBySearch';
import songListPopular from './songListPopular';
import domains from './domains';

const root = {
  typeDefs: gql`
    type Query {
      root: String
    }
  `,
};

const combined = combineModules(
  root,
  domains,
  songListBySearch,
  songListPopular
);

export const typeDefs = combined.typeDefs;
export const resolvers = combined.resolvers;
