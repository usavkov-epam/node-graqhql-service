import { getUser } from './getUser';
import { login } from './login';
import { verify } from './verify';

export default {
  jwt: login,
  user: getUser,
  verify,
};
