export const getAllGenres = ({ genresAPI }) => async (searchParams) => {
  const genres = await genresAPI.getAll(searchParams);

  return {
    ...genres,
    items: genres.items.map(genre => ({ ...genre, id: genre._id }))
  };
}

export const getGenreById = ({ genresAPI }) => async (id: string) => {
  const genre = await genresAPI.getById(id);

  return {
    ...genre,
    id: genre._id,
  };
}

export default {
  getAllGenres,
  getGenreById,
};
