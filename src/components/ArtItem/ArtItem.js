import { Colors, View, Image, ListItem, Text } from "react-native-ui-lib";
import { Alert } from "react-native";

import styles from "./styles";

function ArtItem({ item, onPressItem }) {
  return (
    <View>
      <ListItem
        activeBackgroundColor={Colors.grey60}
        activeOpacity={0.3}
        height={77.5}
        onPress={() => onPressItem(item.id)}
      >
        <ListItem.Part left>
          <Image
            source={{
              uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/200,/0/default.jpg`
            }}
            style={styles.image}
          />
        </ListItem.Part>
        <ListItem.Part
          middle
          column
          containerStyle={[styles.border, { paddingRight: 17 }]}
        >
          <ListItem.Part containerStyle={{ marginBottom: 3 }}>
            <Text
              grey10
              text70
              style={{ flex: 1, marginRight: 10 }}
              numberOfLines={1}
            >
              {item.artist_display}
            </Text>
            <Text grey10 text70 style={{ marginTop: 2 }}>
              {item.date_display}
            </Text>
          </ListItem.Part>
          <ListItem.Part>
            <Text text90 numberOfLines={1}>
              {item?.thumbnail?.alt_text}
            </Text>
          </ListItem.Part>
        </ListItem.Part>
      </ListItem>
    </View>
  );
}

export default ArtItem;
