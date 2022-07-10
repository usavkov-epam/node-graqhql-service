import genresService from "../../services/genres.service";

export const deleteGenre = async (_parent, { id }, { dataSources }) => {
  const genre = await genresService.deleteGenre(dataSources)(id);

  return genre;
}
