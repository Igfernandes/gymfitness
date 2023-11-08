import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const formStyles = StyleSheet.create({
  title: {
    color: colors.white.default,
    fontSize: 19,
    textAlign: "center",
    marginBottom: "5%",
    fontWeight: "600",
  },
  groupSubmit: {
    marginTop: "5%"
  },
  btnSubmit: {
    color: colors.white[900],
    paddingTop: "4%",
    paddingBottom: "4%",
    paddingLeft: "2%",
    paddingRight: "2%",
    backgroundColor: colors.orange.default,
    fontWeight: "700",
    textAlign: "center",
    borderRadius: 10
  },
  hoverBtnSubmit: {
    color: colors.white[900],
    paddingTop: "4%",
    paddingBottom: "4%",
    paddingLeft: "2%",
    paddingRight: "2%",
    backgroundColor: colors.orange[700],
    transform: "scale(0.95)",
    fontWeight: "700",
    textAlign: "center",
    borderRadius: 10
  },
});
