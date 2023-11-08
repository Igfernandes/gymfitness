import { StyleSheet } from "react-native";
import { colors } from "../../../../../styles/colors";

export const styleLayout = StyleSheet.create({
  content: {
    marginTop: "3%"
  },
  box: {
    backgroundColor: colors.black[700],
    display: "flex",
    flexDirection: "row",
    padding: "3%",
    alignItems: "center",
    borderRadius: 5,
    marginTop: "1%",
    marginBottom: "1%"
  },
  text: {
    color: colors.white.default,
    marginLeft: "3%"
  },
  image: {
    width: 24,
    height: 24
  }
});
