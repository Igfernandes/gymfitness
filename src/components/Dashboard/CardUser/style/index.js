import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const styleLayout = StyleSheet.create({
  content: {
    backgroundColor: colors.black[700],
    padding: "5%",
    marginBottom: "4%",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: colors.white[700],
  },
  text: {
    color: colors.white.default,
  },
  status: {
    color: colors.green.default,
  },
  group: {
    marginTop: "2%",
    marginBottom: "2%",
  },
  link: {
    color: colors.orange.default,
    fontWeight: "600",
    padding: "2%",
  },
});
