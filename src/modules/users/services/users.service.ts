const getUserById = ({ usersAPI }) => async (id: string) => {
  const user = await usersAPI.getById(id);

  return {
    ...user,
    id: user._id,
  };
}

const login = ({ usersAPI }) => async ({ email, password }) => {
  return usersAPI.login({ email, password });
}

const verify = ({ usersAPI }) => async (body) => {
  return usersAPI.verify(body);
}

const register = ({ usersAPI }) => async (data) => {
  return usersAPI.login(data);
}

export default {
  getUserById,
  login,
  register,
  verify,
};
