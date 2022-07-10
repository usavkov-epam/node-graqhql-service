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

const createNewArtist = ({ artistsAPI }) => async (data) => {
  const artist = await artistsAPI.create(data);

  return {
    ...artist,
    id: artist._id,
  };
};

const updateArtist = ({ artistsAPI }) => async (data) => {
  const artist = await artistsAPI.update(data);

  return {
    ...artist,
    id: artist._id,
  };
};

const deleteArtist = ({ artistsAPI }) => async (id: string) => {
  return artistsAPI.deleteItem(id);
};


export default {
  createNewArtist,
  deleteArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
};
