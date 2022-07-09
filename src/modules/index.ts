import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';

import { AlbumsAPI, AlbumsResolver } from './albums';
import { ArtistsAPI, ArtistsResolver } from './artists';
import { BandsAPI, BandsResolver } from './bands';
import { FavoritesAPI, FavoritesResolver } from './favourites';
import { GenresAPI, GenresResolver } from './genres';
import { TracksAPI, TracksResolver } from './tracks';
import { UsersAPI, UsersResolver } from './users';

export const typeDefs = mergeTypeDefs(loadFilesSync('src/**/*.graphql'));

export const resolvers = mergeResolvers([
  AlbumsResolver,
  ArtistsResolver,
  BandsResolver,
  FavoritesResolver,
  GenresResolver,
  TracksResolver,
  UsersResolver,
]);

export const dataSources = () => ({
  albumsAPI: new AlbumsAPI(),
  artistsAPI: new ArtistsAPI(),
  bandsAPI: new BandsAPI(),
  favoritesAPI: new FavoritesAPI(),
  genresAPI: new GenresAPI(),
  tracksAPI: new TracksAPI(),
  usersAPI: new UsersAPI(),
})
