import React, { useRef, useState, useContext } from "react";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import FavoritesContext from "../../lib/store/FavoritesContext";
import styles from "./styles";

export default function TabTwoScreen() {
  const [state, dispatch] = useContext(FavoritesContext);

  console.log(state);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}
