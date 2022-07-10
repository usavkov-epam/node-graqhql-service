import Mutation from './mutations';
import Query from './queries';

export default {
  Mutation,
  Query,
  Album: {
    id: ({ _id }) => _id,
    bands: ({ bandsIds }, _args, { dataSources }) => Promise.allSettled(bandsIds.map(id => dataSources.bandsAPI.getById(id))),
    artists: ({ artistsIds }, _args, { dataSources }) => Promise.allSettled(artistsIds.map(id => dataSources.artistsAPI.getById(id))),
    tracks: ({ tracksIds }, _args, { dataSources }) => Promise.allSettled(tracksIds.map(id => dataSources.tracksAPI.getById(id))),
    genres: ({ genresIds }, _args, { dataSources }) => Promise.allSettled(genresIds.map(id => dataSources.genresAPI.getById(id))),
  },
};
