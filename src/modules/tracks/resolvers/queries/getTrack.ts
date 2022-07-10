import tracksService from "../../services/tracks.service";

export const getTrack = async (_parent, { id }, { dataSources }) => {
  const band = await tracksService.getTrackById(dataSources)(id);

  return band;
}
