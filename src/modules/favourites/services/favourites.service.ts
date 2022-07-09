export const getFavorites = ({ favoritesAPI }) => async (searchParams) => {
  const favorites = await favoritesAPI.getAll(searchParams);

  return {
    ...favorites,
    id: favorites._id,
  }
};

export default {
  getFavorites,
};
