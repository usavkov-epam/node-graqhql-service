import Mutation from './mutations';
import Query from './queries';

export default {
  Mutation,
  Query,
  Genre: {
    id: ({ _id }) => _id,
  }
};
