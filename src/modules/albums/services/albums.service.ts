const getAllAlbums = ({ albumsAPI }) => async (searchParams) => {
  const albums = await albumsAPI.getAll(searchParams);
  return {
    ...albums,
    items: albums.items.map(album => ({ ...album, id: album._id })),
  };
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
