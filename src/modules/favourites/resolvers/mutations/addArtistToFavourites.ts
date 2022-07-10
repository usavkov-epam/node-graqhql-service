import favouritesService from "../../services/favourites.service";

export const addArtistToFavourites = async (_parent, { id }, { dataSources }) => {
  const favorites = await favouritesService.addFavorites(dataSources)({ id, type: 'artists' });

  return favorites;
}
