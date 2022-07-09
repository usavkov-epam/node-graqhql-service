export const getAllTracks = ({ tracksAPI }) => async (searchParams) => {
  const tracks = await tracksAPI.getAll(searchParams);
  return {
    ...tracks,
    items: tracks.items.map(track => ({ ...track, id: track._id })),
  };
}

export const getTrackById = ({ tracksAPI }) => async (id: string) => {
  const track = await tracksAPI.getById(id)
  return {
    ...track,
    id: track._id,
  };
}

export default {
  getAllTracks,
  getTrackById,
};
