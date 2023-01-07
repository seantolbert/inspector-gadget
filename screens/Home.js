import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { HeadBar, Tabs, WeeklyCal } from "../components";
import { gStyles } from "../styles/global";
const Home = () => {
  return (
    <SafeAreaView style={gStyles.gContainerStart}>
      <HeadBar />
      <Tabs />
      <WeeklyCal />
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({});
