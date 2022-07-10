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

const createNewAlbum = ({ albumsAPI }) => async (data) => {
  const album = await albumsAPI.create(data);

  return {
    ...album,
    id: album._id,
  };
};

const updateAlbum = ({ albumsAPI }) => async (data) => {
  const album = await albumsAPI.update(data);

  return {
    ...album,
    id: album._id,
  };
};

const deleteAlbum = ({ albumsAPI }) => async (id: string) => {
  return albumsAPI.deleteItem(id);
};

export default {
  createNewAlbum,
  deleteAlbum,
  getAllAlbums,
  getAlbumById,
  updateAlbum,
};
