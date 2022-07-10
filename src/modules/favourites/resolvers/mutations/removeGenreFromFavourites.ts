import favouritesService from "../../services/favourites.service";

export const removeGenreFromFavourites = async (_parent, { id }, { dataSources }) => {
  const favorites = await favouritesService.removeFavorites(dataSources)({ id, type: 'genres' });

  return favorites;
}
