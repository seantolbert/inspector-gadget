import { StyleSheet, Text, View } from "react-native";
import { gStyles } from "../styles/global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HeadBar = () => {
  return (
    <View
      style={{
        width: "100%",
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons
        name="chevron-left"
        size={25}
        style={{ position: "absolute", left: 0, padding: 5 }}
      />
      <Text style={{fontSize: 20}}>Schedule</Text>
    </View>
  );
};
export default HeadBar;
const styles = StyleSheet.create({});
