import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

import AlbumsResolver from './albums/resolvers';
import ArtistsResolver from './artists/resolvers';
import BandsResolver from './bands/resolvers';
import FavoritesResolver from './favourites/resolvers';
import GenresResolver from './genres/resolvers';
import TracksResolver from './tracks/resolvers';
import UsersResolver from './users/resolvers';

export const resolvers = mergeResolvers([
  AlbumsResolver,
  ArtistsResolver,
  BandsResolver,
  FavoritesResolver,
  GenresResolver,
  TracksResolver,
  UsersResolver,
]);

export const typeDefs = mergeTypeDefs(loadFilesSync('src/**/*.graphql'));

console.log(typeDefs);

