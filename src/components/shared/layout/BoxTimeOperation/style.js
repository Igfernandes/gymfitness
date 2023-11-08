import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const styleLayout = StyleSheet.create({
  content: {
    backgroundColor: colors.black[700],
    padding: "4%",
    borderRadius: 10,
    marginTop: "4%",
  },
  title: {
    color: colors.white[700],
  },
  list: {
    width: "100%",
    marginTop: "3%",
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1%",
    marginBottom: "1%",
  },
  weekDay: {
    width: "25%",
  },
  hours: {
    width: "55%",
  },
  status: {
    width: "20%",
  },
  text: {
    color: colors.white.default,
  },
  hoursText: {
    textAlign: "center",
  },
  opened: (isCurrent) => {
    return {
      color: colors.green.default,
      opacity: isCurrent ? 1 : 0.5,
      textAlign: "right",
    };
  },
  closed: (isCurrent) => {
    return {
      color: colors.red.default,
      opacity: isCurrent ? 1 : 0.5,
      textAlign: "right",
    };
  },
});
