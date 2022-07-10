import genresService from "../../services/genres.service";

export const createGenre = async (_parent, { data }, { dataSources }) => {
  const genre = await genresService.createNewGenre(dataSources)(data);

  return genre;
}
