import artistsService from "../../services/artists.service";

export const createArtist = async (_parent, { data }, { dataSources }) => {
  const album = await artistsService.createNewArtist(dataSources)(data);

  return album;
}
