export const getAllArtists = ({ artistsAPI }) => async (searchParams) => {
  const artists = await artistsAPI.getAll(searchParams);
  return {
    ...artists,
    items: artists.items.map(artist => ({ ...artist, id: artist._id }))
  };
}

export const getArtistById = ({ artistsAPI }) => async (id: string) => {
  const artist = await artistsAPI.getById(id);
  return {
    ...artist,
    id: artist._id,
  };
}

export default {
  getAllArtists,
  getArtistById,
};
