import tracksService from "../../services/tracks.service";

export const updateTrack = async (_parent, { id, data }, { dataSources }) => {
  const track = await tracksService.updateTrack(dataSources)({ data, id });

  return track;
}
