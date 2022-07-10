import bandsService from "../../services/bands.service";

export const getAllBands = async (_parent, { limit = 5, offset = 0 }, { dataSources }) => {
  const bands = await bandsService.getAllBands(dataSources)({ limit, offset });

  return bands?.items || [];
}
