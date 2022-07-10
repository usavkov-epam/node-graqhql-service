import artistsService from "../../services/artists.service";

export const updateArtist = async (_parent, { id, data }, { dataSources }) => {
  const album = await artistsService.updateArtist(dataSources)({ data, id });

  return album;
}
