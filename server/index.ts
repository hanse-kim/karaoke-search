import {ApolloServer} from 'apollo-server-micro';
import {NextApiRequest, NextApiResponse} from 'next';
import {resolvers, typeDefs} from './modules';

type RequestHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

const PATH = '/api/graphql';

const apolloServer = new ApolloServer({typeDefs, resolvers});
const serverStart = apolloServer.start();
let apolloRequestHandler: RequestHandler | null = null;

const requestHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  await serverStart;
  if (apolloRequestHandler === null) {
    apolloRequestHandler = apolloServer.createHandler({path: PATH});
  }

  return await apolloRequestHandler(req, res);
};

export default requestHandler;
