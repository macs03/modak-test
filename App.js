import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useReducer } from "react";
import {
  reduceFavorites,
  initialState
} from "./src/lib/store/reducers/favorites";

import FavoritesContext from "./src/lib/store/FavoritesContext";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [state, dispatch] = useReducer(reduceFavorites, initialState);

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
