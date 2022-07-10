const getFavorites = ({ favoritesAPI }) => async (searchParams) => {
  const favorites = await favoritesAPI.getAll(searchParams);

  return {
    ...favorites,
    id: favorites._id,
  }
};

const addFavorites = ({ favoritesAPI }) => async (data) => {
  const favorites = await favoritesAPI.add(data);

  return {
    ...favorites,
    id: favorites._id,
  }
};

const removeFavorites = ({ favoritesAPI }) => async (data) => {
  const favorites = await favoritesAPI.remove(data);

  return {
    ...favorites,
    id: favorites._id,
  }
};

export default {
  addFavorites,
  getFavorites,
  removeFavorites,
};
