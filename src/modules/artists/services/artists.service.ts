export const getAllArtists = ({ artistsAPI }) => async (searchParams) => {
  return artistsAPI.getAll(searchParams);
}

export const getArtistById = ({ artistsAPI }) => async (id: string) => {
  return artistsAPI.getById(id);
}

export default {
  getAllArtists,
  getArtistById,
};
