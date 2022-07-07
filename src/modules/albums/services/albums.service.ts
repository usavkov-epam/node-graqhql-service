const getAllAlbums = ({ albumsAPI }) => async (searchParams = { limit: 5, offset: 0 }) => {
  return albumsAPI.getAll(searchParams)
};

const getAlbumById = ({ albumsAPI }) => async (id) => {
  const album = albumsAPI.getById(id);
  return {
    ...album,
    id: album._id,
  };
};

export default {
  getAllAlbums,
  getAlbumById,
};
