import albumsService from "../../services/albums.service";

export const createAlbum = async (_parent, { data }, { dataSources }) => {
  const album = await albumsService.createNewAlbum(dataSources)(data);

  return album;
}
