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

const createNewBand = ({ bandsAPI }) => async (data) => {
  const band = await bandsAPI.create(data);

  return {
    ...band,
    id: band._id,
  };
};

const updateBand = ({ bandsAPI }) => async (data) => {
  const band = await bandsAPI.update(data);

  return {
    ...band,
    id: band._id,
  };
};

const deleteBand = ({ bandsAPI }) => async (id: string) => {
  return bandsAPI.deleteItem(id);
};

export default {
  createNewBand,
  deleteBand,
  getAllBands,
  getBandById,
  updateBand,
};
