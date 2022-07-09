import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

import { AlbumsAPI, AlbumsResolver } from './albums';
import { ArtistsAPI, ArtistsResolver } from './artists';
import { BandsAPI, BandsResolver } from './bands';
import { FavoritesAPI, FavoritesResolver } from './favourites';
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

export const dataSources = () => ({
  albumsAPI: new AlbumsAPI(),
  artistsAPI: new ArtistsAPI(),
  bandsAPI: new BandsAPI(),
  favoritesAPI: new FavoritesAPI(),
})
