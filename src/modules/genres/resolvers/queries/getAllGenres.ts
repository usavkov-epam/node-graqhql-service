import genresService from '../../services/genres.service';

export const getAllGenres = async (_parent, { limit = 5, offset = 0 }, { dataSources }) => {
  const genres = await genresService.getAllGenres(dataSources)({ limit, offset });

  return genres?.items || [];
}
