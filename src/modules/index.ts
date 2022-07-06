import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

import { AlbumsResolver } from './albums';
import { ArtistsResolver } from './artists';
import { BandsResolver } from './bands';
import { FavoritesResolver } from './favourites';
import { GenresResolver } from './genres';
import { TracksResolver } from './tracks';
import { UsersResolver } from './users';

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
