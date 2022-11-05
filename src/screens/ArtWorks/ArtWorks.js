import { View, Text, LoaderScreen, Colors } from "react-native-ui-lib";
import { FlatList, Pressable } from "react-native";
import { useState, useLayoutEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

import useFetch from "../../hooks/useFetch";
import ArtItem from "../../components/ArtItem/ArtItem";
import Separator from "../../components/Separator/Separator";
import styles from "./styles";

function ArtWorks({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => setPage(1)}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1
          })}
        >
          <FontAwesome
            name="refresh"
            size={25}
            color={Colors.black}
            style={{ marginRight: 15 }}
          />
        </Pressable>
      )
    });
  }, [navigation]);

  const [page, setPage] = useState(1);

  const { isLoading, data, error } = useFetch({
    endpoint: "artworks",
    options: {
      page,
      limit: 20 * page
    }
  });

  const onHandlePress = item => {
    navigation.navigate("Modal", { itemId: item.id, item });
  };

  if (isLoading) {
    return <LoaderScreen message={"Loading..."} color={Colors.grey40} />;
  }

  if (error) {
    return (
      <Text
        style={styles.title}
      >{`"An error has occurred: " ${error.message}`}</Text>
    );
  }

  if (data?.length === 0) {
    return <Text style={styles.title}>There is no data available</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ArtItem item={item} onPressItem={() => onHandlePress(item)} />
        )}
        keyExtractor={({ _, index }) => index}
        onEndReached={() => {
          setPage(prevPage => prevPage + 1);
        }}
        onEndReachedThreshold={0}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
}

export default ArtWorks;
