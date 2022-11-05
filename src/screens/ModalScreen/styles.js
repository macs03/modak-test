import { StyleSheet } from "react-native";
import { BorderRadiuses } from "react-native-ui-lib";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  },
  image: {
    width: "80%",
    height: "50%",
    alignSelf: "center",
    borderRadius: BorderRadiuses.br20,
    alignSelf: "center",
    marginTop: 30
  },
  card: {
    marginBottom: 15,
    height: 850
  }
});

export default styles;
