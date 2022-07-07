import artistsService from "../../services/artists.service";

export const getAllArtists = async (_parent, { limit, offset }, { dataSources }) => {
  const artists = await artistsService.getAllArtists(dataSources)({ limit, offset });

  return artists?.items || [];
}
