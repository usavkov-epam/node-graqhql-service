import { resolveRelated } from '../../../helpers';
import Mutation from './mutations';
import Query from './queries'

export default {
  Query,
  Mutation,
  Artist: {
    id: ({ _id }) => _id,
    bands: ({ bandsIds }, _args, { dataSources }) => resolveRelated(bandsIds.map(id => dataSources.bandsAPI.getById(id))),
  }
};

