import { useState } from "react";
import { Pressable } from "react-native";
import { Colors } from "react-native-ui-lib";
import { FontAwesome } from "@expo/vector-icons";

const Favorite = ({ itemId }) => {
  const [marked, setMarked] = useState(false);

  return (
    <Pressable
      onPress={() => setMarked(!marked)}
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
