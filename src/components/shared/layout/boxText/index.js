import { Text, View, Image } from "react-native";
import { styleLayout } from "./style";

export function BoxText({
  boxes = [
    {
      icon: "",
      link: "",
      label: "",
    },
  ],
  navigation,
}) {
  return (
    <View style={styleLayout.content}>
      {boxes.map(({ label, link, icon }) => (
        <View style={styleLayout.box} onTouchStart={() => navigation.navigate(link)} key={label}>
          <Image source={icon} style={styleLayout.image} />
          <Text style={styleLayout.text}>{label}</Text>
        </View>
      ))}
    </View>
  );
}
