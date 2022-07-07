import albumsService from "../../services/albums.service";

export const getAlbum = async (_parent, { id }, { dataSources }) => {
  const album = await albumsService.getAlbumById(dataSources)(id);

  return album;
}
