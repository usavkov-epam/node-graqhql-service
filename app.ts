import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';

import 'dotenv/config';

import {
  resolvers,
  typeDefs,
} from './src/modules';

const PORT = process.env.PORT || 4000;

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
  });

  await server.start();
  server.applyMiddleware({ app });
  
  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  });
}

startApolloServer()
