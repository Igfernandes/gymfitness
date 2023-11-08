import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styleLayout = StyleSheet.create({
  container: {
    backgroundColor: colors.black.default,
    minHeight: "100%",
    paddingTop: "5%",
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5%"
  },
  title: {
    color: colors.white.default,
    fontSize: 20,
    lineHeight: 30,
    marginTop: "2%",
  },
  subtitle: {
    color: colors.white[700],
    fontSize: 14,
    lineHeight: 30,
  },
});
