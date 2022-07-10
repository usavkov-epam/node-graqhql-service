import usersService from "../../services/users.service";

export const register = async (_parent, { data }, { dataSources }) => {
  const user = await usersService.register(dataSources)(data);

  return user;
}
