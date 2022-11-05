import { useState, useContext } from "react";
import { Pressable } from "react-native";
import { Colors } from "react-native-ui-lib";
import { FontAwesome } from "@expo/vector-icons";

import FavoritesContext from "../../lib/store/FavoritesContext";

const Favorite = ({ itemId, onPress }) => {
  const [state, dispatch] = useContext(FavoritesContext);

  const { favorites } = state;

  let initialState = false;

  favorites.forEach(favorite => {
    if (favorite.id === itemId) {
      initialState = true;
    }
  });

  const [marked, setMarked] = useState(initialState);

  return (
    <Pressable
      onPress={() => {
        setMarked(!marked);
        onPress(!marked);
      }}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1
      })}
    >
      <FontAwesome
        name="star"
        size={25}
        color={marked ? Colors.black : Colors.grey40}
        style={{ marginRight: 15 }}
      />
    </Pressable>
  );
};

export default Favorite;
