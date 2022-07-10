import { resolveRelated } from '../../../helpers';
import Mutation from './mutations';
import Query from './queries';

export default {
  Mutation,
  Query,
  Track: {
    id: ({ _id }) => _id,
    artists: ({ artistsIds }, _args, { dataSources }) => resolveRelated(artistsIds.map(id => dataSources.artistsAPI.getById(id))),
    bands: ({ bandsIds }, _args, { dataSources }) => resolveRelated(bandsIds.map(id => dataSources.bandsAPI.getById(id))),
    genres: ({ genresIds }, _args, { dataSources }) => resolveRelated(genresIds.map(id => dataSources.genresAPI.getById(id))),
    album: ({ albumId }, _args, { dataSources }) => dataSources.albumsAPI.getById(albumId),
  }
};
