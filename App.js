import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useReducer, useState, useEffect } from "react";
import {
  reduceFavorites,
  initialState,
  getStoredData
} from "./src/lib/store/reducers/favorites";

import FavoritesContext from "./src/lib/store/FavoritesContext";
import { addFavorite } from "./src/lib/store/actions/actions";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

export default function App() {
  const [initialStateData, setInitialStateData] = useState(initialState);
  const [state, dispatch] = useReducer(reduceFavorites, initialStateData);

  useEffect(() => {
    getStoredData()
      .then(data => {
        data?.favorites.forEach(row => {
          dispatch(addFavorite(row));
        });
      })
      .catch(error => console.error(error));
  }, []);

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <FavoritesContext.Provider value={[state, dispatch]}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </FavoritesContext.Provider>
    );
  }
}
