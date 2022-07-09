import artistsService from "../../services/artists.service";

export const getAllArtists = async (_parent, { limit = 5, offset = 0 }, { dataSources }) => {
  const artists = await artistsService.getAllArtists(dataSources)({ limit, offset });

  return artists?.items || [];
}
