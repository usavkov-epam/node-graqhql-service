import favouritesService from "../../services/favourites.service";

export const removeBandFromFavourites = async (_parent, { id }, { dataSources }) => {
  const favorites = await favouritesService.removeFavorites(dataSources)({ id, type: 'bands' });

  return favorites;
}
