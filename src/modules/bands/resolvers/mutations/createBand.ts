import bandsService from "../../services/bands.service";

export const createBand = async (_parent, { data }, { dataSources }) => {
  const band = await bandsService.createNewBand(dataSources)(data);

  return band;
}
