import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styleLayout = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: colors.black.default,
  },
  content: {
    paddingBottom: "5%",
    borderBottomWidth: 1,
    borderBottomColor: colors.white[700],
    marginBottom: "5%"
  },
  form: {
    width: "100%",
  },
  groupTime: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectGroup: {
    width: "47%",
  },
  select: {
    padding: "8%",
  },
  formSubmit: {
    marginTop: "5%",
    marginBottom: "35%",
  },
  btnSubmit: {
    color: colors.white.default,
    padding: "4%",
    backgroundColor: colors.orange.default,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "5%",
    borderRadius: 5,
  },
});
