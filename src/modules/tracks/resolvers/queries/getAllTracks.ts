import tracksService from '../../services/tracks.service';

export const getAllTracks = async (_parent, { limit = 5, offset = 0 }, { dataSources }) => {
  const genres = await tracksService.getAllTracks(dataSources)({ limit, offset });

  return genres?.items || [];
}
