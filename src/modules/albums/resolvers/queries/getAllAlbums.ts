import albumsService from "../../services/albums.service";

export const getAllAlbums = async (_parent, { limit, offset }, { dataSources }) => {
  const albums = await albumsService.getAllAlbums(dataSources)({ limit, offset });

  return albums?.items || [];
}
