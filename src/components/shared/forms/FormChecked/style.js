import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const styleLayout = StyleSheet.create({
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
  label: {
    color: colors.white.default,
    fontSize: 15,
    marginLeft: "2%",
  },
  input: {
    width: 35,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 15,
    borderWidth: 2,
    borderColor: colors.white[700],
    borderRadius: 10,
    marginRight: "2%",
  },
  checked: {
    width: 15,
    height: 15,
    objectFit: "contain",
    padding: "5%",
  },
});
