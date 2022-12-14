import {
  View,
  Card,
  Image,
  Colors,
  Text,
  AnimatedScanner,
  LoaderScreen
} from "react-native-ui-lib";
import { ScrollView } from "react-native";
import { useLayoutEffect, useContext } from "react";

import useFetch from "../../hooks/useFetch";
import FavoritesContext from "../../lib/store/FavoritesContext";
import { addFavorite, removeFavorite } from "../../lib/store/actions/actions";

import Favorite from "../../components/Favorite/Favorite";

import styles from "./styles";

export default function ModalScreen({
  navigation,
  route: {
    params: { itemId, item }
  }
}) {
  const [state, dispatch] = useContext(FavoritesContext);

  const { isLoading, data, error } = useFetch({
    endpoint: "artworkById",
    options: {
      id: itemId
    }
  });

  const onHandlePress = flag => {
    if (flag) {
      dispatch(addFavorite(item));
    } else {
      dispatch(removeFavorite(itemId));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Item ${itemId}`,
      headerRight: () => <Favorite itemId={itemId} onPress={onHandlePress} />
    });
  }, [navigation, itemId]);

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

  return (
    <ScrollView containerStyle={styles.container}>
      <View flex useSafeArea>
        <View flex padding-10>
          <View paddingL-40 marginB-20>
            <AnimatedScanner
              backgroundColor={Colors.grey10}
              progress={100}
              duration={1600}
              containerStyle={{ backgroundColor: Colors.grey30, height: 6 }}
            />
          </View>

          <Card containerStyle={styles.card}>
            <Image
              source={{
                uri: `https://www.artic.edu/iiif/2/${data?.image_id}/full/843,/0/default.jpg`
              }}
              style={styles.image}
            />
            <View padding-20>
              <Text text50 center marginB-20 color={Colors.grey10}>
                {`${data?.title}`}
              </Text>
              <Text text90 color={Colors.grey10}>
                {`Credits: ${data?.credit_line}`}
              </Text>

              <Text text90 color={Colors.grey10}>
                {`Description: ${data?.thumbnail.alt_text}`}
              </Text>

              <Text text90 color={Colors.grey10}>
                {`Origin: ${data?.artist_display}`}
              </Text>

              <Text text90 color={Colors.grey10}>
                {`Dimensions: ${data?.dimensions}`}
              </Text>
              <Text text90 color={Colors.grey10}>
                {`Date: ${data?.date_display}`}
              </Text>
            </View>

            <AnimatedScanner opacity={0.7} progress={100} duration={1600} />
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}
