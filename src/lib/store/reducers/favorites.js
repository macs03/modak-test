import { FavoritesTypes } from "../actions/actions";

const { ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_ALL_FAVORITES } = FavoritesTypes;

export const initialState = { favorites: [] };

function deleteFavorites(state, id) {
  const { favorites } = state;

  const updatedFavorites = favorites.filter(favorite => favorite.id !== id);

  return updatedFavorites;
}

export function reduceFavorites(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload]
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: deleteFavorites(state, payload)
      };
    case REMOVE_ALL_FAVORITES:
      return { favorites: [] };
    default:
      return state;
  }
}
