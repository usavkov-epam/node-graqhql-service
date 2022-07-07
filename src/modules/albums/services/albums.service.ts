const getAllAlbums = ({ albumsAPI }) => async (searchParams) => {
  return albumsAPI.getAll(searchParams)
};

const getAlbumById = ({ albumsAPI }) => async (id) => {
  const album = await albumsAPI.getById(id);
  return {
    ...album,
    id: album._id,
  };
};

export default {
  getAllAlbums,
  getAlbumById,
};
