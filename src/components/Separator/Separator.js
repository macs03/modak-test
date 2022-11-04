import { View } from "react-native-ui-lib";
import styles from "./styles";

const Separator = () => {
  return (
    <View
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  );
};

export default Separator;
