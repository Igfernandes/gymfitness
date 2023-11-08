import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const layoutStyles = StyleSheet.create({
  container: {
    position: 'relative',
    height: "100%",
    backgroundColor: colors.black.default
  },
  wallaper: {
    position: 'absolute',
    top: "0%",
    left: "0%",
    width: "100%",
    height: "65%",
    objectFit: "contain"
  },
  layerWallper: {
    backgroundColor: "#00000060",
    height: "60%",
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
  },
  contentLogo: {
    width: "100%",
    height: "50%",
  },
  logo: {
    width: 180,
    height: 110,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto"
  },
  form: {
    backgroundColor: colors.black.default,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: "12%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "10%",
  }
});
