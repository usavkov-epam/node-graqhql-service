import Mutation from './mutations';
import Query from './queries';

export default {
  Mutation,
  Query,
  User: {
    id: ({ _id }) => _id,
    secondName: ({ lastName }) => lastName,
  }
};
