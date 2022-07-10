import favouritesService from "../../services/favourites.service";

export const addGenreToFavourites = async (_parent, { id }, { dataSources }) => {
  const favorites = await favouritesService.addFavorites(dataSources)({ id, type: 'genres' });

  return favorites;
}
