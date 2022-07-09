import usersService from "../../services/users.service";

export const login = async (_parent, { email, password }, { dataSources }) => {
  const user = await usersService.login(dataSources)({ email, password });

  return user;
}
