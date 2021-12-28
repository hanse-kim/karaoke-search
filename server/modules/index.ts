import {gql} from 'apollo-server-micro';
import combineModules from 'server/utils/combineModules';
import getSongSearchResult from './getSongSearchResult';

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
