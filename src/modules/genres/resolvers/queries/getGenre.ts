import genresService from "../../services/genres.service";

export const getGenre = async (_parent, { id }, { dataSources }) => {
  const band = await genresService.getGenreById(dataSources)(id);

  return band;
}
