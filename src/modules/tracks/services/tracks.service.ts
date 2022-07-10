const getAllTracks = ({ tracksAPI }) => async (searchParams) => {
  const tracks = await tracksAPI.getAll(searchParams);
  return {
    ...tracks,
    items: tracks.items.map(track => ({ ...track, id: track._id })),
  };
}

const getTrackById = ({ tracksAPI }) => async (id: string) => {
  const track = await tracksAPI.getById(id)
  return {
    ...track,
    id: track._id,
  };
}

const createNewTrack = ({ tracksAPI }) => async (data) => {
  const track = await tracksAPI.create(data);

  return {
    ...track,
    id: track._id,
  };
};

const updateTrack = ({ tracksAPI }) => async (data) => {
  const track = await tracksAPI.update(data);

  return {
    ...track,
    id: track._id,
  };
};

const deleteTrack = ({ tracksAPI }) => async (id: string) => {
  return tracksAPI.deleteItem(id);
};

export default {
  createNewTrack,
  deleteTrack,
  getAllTracks,
  getTrackById,
  updateTrack,
};
