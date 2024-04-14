import {NextApiRequest, NextApiResponse} from 'next';
import apolloServer from 'server';

const PATH = '/api/graphql';

type RequestHandler = ReturnType<typeof apolloServer.createHandler>;

let apolloRequestHandler: RequestHandler | null = null;

const requestHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (apolloRequestHandler === null) {
    await apolloServer.start();
    apolloRequestHandler = apolloServer.createHandler({path: PATH});
  }

  return await apolloRequestHandler(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default requestHandler;
