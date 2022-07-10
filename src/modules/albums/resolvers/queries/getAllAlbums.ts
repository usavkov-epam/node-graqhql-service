import albumsService from "../../services/albums.service";

export const getAllAlbums = async (_parent, { limit = 5, offset = 0 }, { dataSources }) => {
  const albums = await albumsService.getAllAlbums(dataSources)({ limit, offset });

  return albums?.items || [];
}
