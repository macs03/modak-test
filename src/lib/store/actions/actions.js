export const FavoritesTypes = {
  ADD_FAVORITE: "addFavorite",
  REMOVE_FAVORITE: "removeFavorite",
  REMOVE_ALL_FAVORITES: "removeAllFavorites"
};

export const addFavorite = item => ({
  type: FavoritesTypes.ADD_FAVORITE,
  payload: item
});

export const removeFavorite = id => ({
  type: FavoritesTypes.REMOVE_FAVORITE,
  payload: id
});

export const removeAllFavorites = () => ({
  type: FavoritesTypes.REMOVE_ALL_FAVORITES
});
