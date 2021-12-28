import {gql} from 'apollo-server-micro';
import combineModules from 'server/utils/combineModules';
import getSongSearchResult from './songListBySearch';

const root = {
  typeDefs: gql`
    type Query {
      root: String
    }
  `,
};

const combined = combineModules(root, getSongSearchResult);
export const typeDefs = combined.typeDefs;
export const resolvers = combined.resolvers;
