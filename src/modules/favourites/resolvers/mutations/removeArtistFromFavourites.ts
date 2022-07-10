import favouritesService from "../../services/favourites.service";

export const removeArtistFromFavourites = async (_parent, { id }, { dataSources }) => {
  const favorites = await favouritesService.removeFavorites(dataSources)({ id, type: 'artists' });

  return favorites;
}
