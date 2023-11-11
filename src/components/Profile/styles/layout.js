import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styleLayout = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: colors.black.default,
  },
  form: {
    width: "100%"
  },
  formSubmit: {
    marginTop: "5%",
    marginBottom: "35%"
  },
  btnDelete: {
    color: colors.white.default,
    padding: "4%",
    backgroundColor: colors.red.default,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "5%",
    borderRadius: 5
  },
  btnSubmit: {
    color: colors.white.default,
    padding: "4%",
    backgroundColor: colors.orange.default,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "5%",
    borderRadius: 5
  }
});
