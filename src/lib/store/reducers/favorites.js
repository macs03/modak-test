import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoritesTypes } from "../actions/actions";

const { ADD_FAVORITE, REMOVE_FAVORITE, REMOVE_ALL_FAVORITES } = FavoritesTypes;

async function saveData(dataToStored) {
  try {
    const jsonValue = JSON.stringify(dataToStored);
    await AsyncStorage.setItem("@app_data", jsonValue);
  } catch (error) {
    console.error(error);
  }
}

export const getStoredData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@app_data");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(error);
  }
};

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
      const newState = {
        ...state,
        favorites: [...state.favorites, payload]
      };

      saveData(newState);

      return newState;
    case REMOVE_FAVORITE:
      const newStateAfterDelete = {
        ...state,
        favorites: deleteFavorites(state, payload)
      };

      saveData(newStateAfterDelete);

      return newStateAfterDelete;
    case REMOVE_ALL_FAVORITES:
      const stateRestated = { favorites: [] };

      saveData(stateRestated);

      return stateRestated;
    default:
      return state;
  }
}
