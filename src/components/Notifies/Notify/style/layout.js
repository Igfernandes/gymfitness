import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const styleLayout = StyleSheet.create({
  content: {
    padding: "4%",
    borderColor: colors.white[500],
    borderWidth: 1,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  groupName: {
    position: "relative",
    width: "50%",
    display: "flex",
    flexDirection: "row",
  },
  name: {
    color: colors.white.default,
    fontSize: 16,
  },
  iconViewer: {
    backgroundColor: colors.green.default,
    padding: 4,
    width: 5,
    height: 5,
    borderRadius: 20,
    marginLeft: "4%",
  },
  date: {
    color: colors.white.default,
    fontSize: 12,
    fontWeight: 400
  },
  message: {
    color: colors.white[700],
    marginTop: '4%'
  }
});
