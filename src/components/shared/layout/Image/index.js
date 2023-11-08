import React from "react";
import { useAssets } from "expo-asset";
import { Image as Img } from "react-native";

export function Image(src, rest = React.JSX.Element) {
  const [assets, error] = useAssets([require(src)]);

  return assets ? <Img source={assets[0]} {...rest} /> : null;
}
