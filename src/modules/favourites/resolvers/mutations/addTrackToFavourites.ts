import favouritesService from "../../services/favourites.service";

export const addTrackToFavourites = async (_parent, { id }, { dataSources }) => {
  const favorites = await favouritesService.addFavorites(dataSources)({ id, type: 'tracks' });

  return favorites;
}
