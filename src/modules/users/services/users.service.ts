export const getUserById = ({ usersAPI }) => async (id: string) => {
  const user = await usersAPI.getById(id);

  return {
    ...user,
    id: user._id,
  };
}

export const login = ({ usersAPI }) => async ({ email, password }) => {
  return usersAPI.login({ email, password });
}

export default {
  getUserById,
  login,
};
