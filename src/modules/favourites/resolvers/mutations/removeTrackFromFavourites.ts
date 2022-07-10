import favouritesService from "../../services/favourites.service";

export const removeTrackFromFavourites = async (_parent, { id }, { dataSources }) => {
  const favorites = await favouritesService.removeFavorites(dataSources)({ id, type: 'tracks' });

  return favorites;
}
