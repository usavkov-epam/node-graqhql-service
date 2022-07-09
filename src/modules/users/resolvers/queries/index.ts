import { getUser } from './getUser';
import { login } from './login';

export default {
  user: getUser,
  jwt: login,
};
