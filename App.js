import { StyleSheet, Text, View } from "react-native";
import { CustemText } from "./CustemText";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <CustemText value="Totorials" color="blue" />
        <CustemText value="Practice" color="red" />
        <CustemText value="Programs" color="blue" />
        <CustemText value="Interview QuesTions" color="red" />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.custemView}>
          <Text style={styles.txt}>Give US</Text>
          <Text style={styles.txt}>Five Stars</Text>
        </View>
        <View style = {{flex: 1}}>
          <CustemText value="More Apps" color="blue" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  custemView: {
    flex: 1,
    backgroundColor: "blue",
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
