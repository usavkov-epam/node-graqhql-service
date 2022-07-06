import { loadFiles } from '@graphql-tools/load-files';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const typeDefs = await loadFiles('src/**/*.graphql');

  const server = new ApolloServer({
    typeDefs,
    resolvers: [],
    csrfPrevention: true,
    cache: 'bounded',
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer()
