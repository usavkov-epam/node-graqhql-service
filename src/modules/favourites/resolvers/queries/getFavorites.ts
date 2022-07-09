import favoritesService from "../../services/favourites.service";

export const getFavorites = async (_parent, {}, { dataSources }) => {
  const favorites = await favoritesService.getFavorites(dataSources)({});

  return favorites;
}
