import artistsService from "../../services/artists.service";

export const deleteArtist = async (_parent, { id }, { dataSources }) => {
  const album = await artistsService.deleteArtist(dataSources)(id);

  return album;
}
