import bandsService from "../../services/bands.service";

export const deleteBand = async (_parent, { id }, { dataSources }) => {
  const band = await bandsService.deleteBand(dataSources)(id);

  return band;
}
