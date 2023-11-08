import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const style = StyleSheet.create({
  group: {
    marginTop: "2%",
    marginBottom: "2%",
  },
  label: {
    color: colors.white.default,
    marginBottom: "2%",
    fontSize: 15,
  },
  input: {
    position: "relative",
    width: "100%",
    color: colors.white.default,
    fontSize: 15,
    padding: "4%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.white[700],
  },
  iconInput: {
    position: "absolute",
    top: "50%",
    right: "3%"
  }
});
