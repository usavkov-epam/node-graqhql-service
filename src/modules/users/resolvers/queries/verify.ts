import usersService from "../../services/users.service";

export const verify = async (_parent, {}, { dataSources }) => {
  const user = await usersService.verify(dataSources)({});

  return user;
}
