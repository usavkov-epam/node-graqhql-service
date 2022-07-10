import tracksService from "../../services/tracks.service";

export const createTrack = async (_parent, { data }, { dataSources }) => {
  const track = await tracksService.createNewTrack(dataSources)(data);

  return track;
}
