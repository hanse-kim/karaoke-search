import {ApolloServer} from 'apollo-server-micro';
import {resolvers, typeDefs} from './modules';

const apolloServer = new ApolloServer({typeDefs, resolvers});

export default apolloServer;
