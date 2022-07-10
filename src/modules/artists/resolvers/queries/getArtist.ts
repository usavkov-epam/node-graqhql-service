import artistsService from "../../services/artists.service";

export const getArtist = async (_parent, { id }, { dataSources }) => {
  const artist = await artistsService.getArtistById(dataSources)(id);

  return artist;
}
