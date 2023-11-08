import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styleLayout = StyleSheet.create({
  container: {
    backgroundColor: colors.black.default,
    minHeight: "100%",
    paddingTop: "2%",
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "4%",
    marginBottom: "1%"
  },
  title: {
    color: colors.white.default,
    fontSize: 20,
    lineHeight: 30,
    marginTop: "2%",
  },
  counter: {
    color: colors.white[700],
    fontSize: 16,
  },
  subtitle: {
    color: colors.white[700],
    fontSize: 14,
    lineHeight: 30,
  },
  loggoutBtn: {
    backgroundColor: colors.red.default,
    textAlign: "center",
    padding: "2%",
    color: colors.white.default,
    borderRadius: 3,
    fontWeight: 600
  }
});
