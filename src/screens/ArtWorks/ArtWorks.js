import { View, Text, LoaderScreen, Colors } from "react-native-ui-lib";
import { FlatList } from "react-native";
import { useState, useEffect } from "react";

import useFetch from "../../hooks/useFetch";
import ArtItem from "../../components/ArtItem/ArtItem";
import Separator from "../../components/Separator/Separator";
import styles from "./styles";

function ArtWorks({ navigation }) {
  const [page, setPage] = useState(1);

  const { isLoading, data, error } = useFetch({
    endpoint: "artworks",
    options: {
      page,
      limit: 20 * page
    }
  });
  // const { isLoading, data, error, isFetching } = useFetch({
  //   endpoint: "artworkById",
  //   options: {
  //     id: 263923
  //   }
  // });

  console.log("first");
  console.log(data);
  // console.log(page);

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
        renderItem={({ item }) => <ArtItem item={item} />}
        keyExtractor={({ _, index }) => index}
        onEndReached={() => {
          console.log("reaching");
          setPage(prevPage => prevPage + 1);
        }}
        onEndReachedThreshold={0.8}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
}

export default ArtWorks;
