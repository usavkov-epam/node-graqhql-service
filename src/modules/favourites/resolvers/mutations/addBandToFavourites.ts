import favouritesService from "../../services/favourites.service";

export const addBandToFavourites = async (_parent, { id }, { dataSources }) => {
  const favorites = await favouritesService.addFavorites(dataSources)({ id, type: 'bands' });

  return favorites;
}
