export const getAllBands = ({ bandsAPI }) => async (searchParams) => {
  const bands = await bandsAPI.getAll(searchParams);
  return {
    ...bands,
    items: bands.items.map(band => ({ ...band, id: band._id })),
  };
}

export const getBandById = ({ bandsAPI }) => async (id: string) => {
  const band = await bandsAPI.getById(id)
  return {
    ...band,
    id: band._id,
  };
}

export default {
  getAllBands,
  getBandById,
};
