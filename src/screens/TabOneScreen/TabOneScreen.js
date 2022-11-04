import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import useFetch from "../../hooks/useFetch";

import styles from "./styles";

export default function TabOneScreen({ navigation }) {
  const { isLoading, data, error, isFetching } = useFetch({
    endpoint: "artworks",
    options: {
      page: 1,
      limit: 20
    }
  });
  // const { isLoading, data, error, isFetching } = useFetch({
  //   endpoint: "artworkById",
  //   options: {
  //     id: 263923
  //   }
  // });

  console.log(data);

  if (isLoading) {
    return <Text style={styles.title}>Loading...</Text>;
  }

  if (error) {
    return (
      <Text
        style={styles.title}
      >{`"An error has occurred: " ${error.message}`}</Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}
