import tracksService from "../../services/tracks.service";

export const deleteTrack = async (_parent, { id }, { dataSources }) => {
  const track = await tracksService.deleteTrack(dataSources)(id);

  return track;
}
