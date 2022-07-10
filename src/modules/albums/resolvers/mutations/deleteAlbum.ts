import albumsService from "../../services/albums.service";

export const deleteAlbum = async (_parent, { id }, { dataSources }) => {
  const album = await albumsService.deleteAlbum(dataSources)(id);

  return album;
}
