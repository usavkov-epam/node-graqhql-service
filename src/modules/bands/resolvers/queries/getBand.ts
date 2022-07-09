import bandsService from "../../services/bands.service";

export const getBand = async (_parent, { id }, { dataSources }) => {
  const band = await bandsService.getBandById(dataSources)(id);

  return band;
}
