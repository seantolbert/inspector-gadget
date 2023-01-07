import { StyleSheet } from "react-native";

const background = "#020100";

export const gStyles = StyleSheet.create({
  gContainerCenter: {
    flex: 1,
    background,
    justifyContent: "center",
    alignItems: "center",
  },
  gContainerStart: {
    flex: 1,
    background,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  gText: {
    letterSpacing: 5,
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "light",
  },
});
