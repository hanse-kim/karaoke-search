import type {DocumentNode} from 'graphql';
import type {IResolvers} from '@graphql-tools/utils';

interface GqlModule {
  typeDefs?: DocumentNode;
  resolvers?: IResolvers<any, any, Record<string, any>, any>;
}

const combineModules = (...modules: GqlModule[]) => {
  const typeDefs = [];
  const resolvers = [];
  for (const module of modules) {
    if (module.typeDefs) typeDefs.push(module.typeDefs);
    if (module.resolvers) resolvers.push(module.resolvers);
  }

  return {typeDefs, resolvers};
};

export default combineModules;
