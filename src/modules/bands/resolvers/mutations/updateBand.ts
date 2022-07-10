import bandsService from "../../services/bands.service";

export const updateBand = async (_parent, { id, data }, { dataSources }) => {
  const band = await bandsService.updateBand(dataSources)({ data, id });

  return band;
}
