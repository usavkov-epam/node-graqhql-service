import { resolveRelated } from '../../../helpers';
import Mutation from './mutations';
import Query from './queries';

export default {
  Query,
  Mutation,
  Band: {
    id: ({ _id }) => _id,
    genres: ({ genresIds }, _args, { dataSources }) => resolveRelated(genresIds.map(id => dataSources.genresAPI.getById(id))),
    members: ({ members }, _args, { dataSources }) => {
      return resolveRelated(members.map(async ({ artistId, ...member }) => {
        const artist = await dataSources.artistsAPI.getById(artistId);

        return {
          artist,
          ...member,
        }
      }))
    },
  }
};
