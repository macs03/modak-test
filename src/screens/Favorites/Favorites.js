import { View, Text, Colors } from "react-native-ui-lib";
import { FlatList, Pressable } from "react-native";
import { useLayoutEffect, useContext } from "react";
import { FontAwesome } from "@expo/vector-icons";

import FavoritesContext from "../../lib/store/FavoritesContext";
import { removeAllFavorites } from "../../lib/store/actions/actions";

import ArtItem from "../../components/ArtItem/ArtItem";
import Separator from "../../components/Separator/Separator";
import styles from "./styles";

function Favorites({ navigation }) {
  const [state, dispatch] = useContext(FavoritesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            dispatch(removeAllFavorites());
          }}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1
          })}
        >
          <FontAwesome
            name="trash"
            size={25}
            color={Colors.black}
            style={{ marginRight: 15 }}
          />
        </Pressable>
      )
    });
  }, [navigation]);

  const onHandlePress = item => {
    navigation.navigate("Modal", { itemId: item.id, item });
  };

  if (state.favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>There is no favorites saved</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={state.favorites}
        renderItem={({ item }) => (
          <ArtItem item={item} onPressItem={() => onHandlePress(item)} />
        )}
        keyExtractor={({ _, index }) => index}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
}

export default Favorites;
