import { StyleSheet } from "react-native";
import { colors } from "../../../../../styles/colors";

export const styleHeader = StyleSheet.create({
  content: {
    backgroundColor: colors.black.default,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'center',
    borderBottomColor: colors.white[300],
    borderWidth: 1,
  },
  box: {
    width: "50%",
    padding: "5%",
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    width: 64,
    height: 40,
  },
  notifyIcon: {
    width: 24,
    marginRight: '5%'
  },
  menuIcon: {
    width: 24,
  }
});
