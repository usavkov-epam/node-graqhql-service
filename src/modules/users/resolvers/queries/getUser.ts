import usersService from "../../services/users.service";

export const getUser = async (_parent, { id }, { dataSources }) => {
  const user = await usersService.getUserById(dataSources)(id);

  return user;
}
