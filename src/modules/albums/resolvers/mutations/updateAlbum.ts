import albumsService from "../../services/albums.service";

export const updateAlbum = async (_parent, { id, data }, { dataSources }) => {
  const album = await albumsService.updateAlbum(dataSources)({ data, id });

  return album;
}
