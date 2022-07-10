import genresService from "../../services/genres.service";

export const updateGenre = async (_parent, { id, data }, { dataSources }) => {
  const genre = await genresService.updateGenre(dataSources)({ data, id });

  return genre;
}
