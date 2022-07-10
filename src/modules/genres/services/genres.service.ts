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

const createNewGenre = ({ genresAPI }) => async (data) => {
  const genre = await genresAPI.create(data);

  return {
    ...genre,
    id: genre._id,
  };
};

const updateGenre = ({ genresAPI }) => async (data) => {
  const genre = await genresAPI.update(data);

  return {
    ...genre,
    id: genre._id,
  };
};

const deleteGenre = ({ genresAPI }) => async (id: string) => {
  return genresAPI.deleteItem(id);
};

export default {
  createNewGenre,
  deleteGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
};
