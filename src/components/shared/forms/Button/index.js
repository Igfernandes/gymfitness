import { View, Text, StyleSheet } from "react-native";
import { useButton } from "./hooks/useButton";
import { When } from "../../utils/When";

export function Button({
  style = StyleSheet.create({}),
  text,
  hoverStyle = {},
  onPress = () => 0,
  isLoading,
}) {
  const { handleHover, styleCurrent } = useButton({
    style,
    hoverStyle,
  });
  const { color, textAlign, fontSize, fontWeight, ...viewStyle } = styleCurrent;

  return (
    <>
      <When isValid={!isLoading}>
        <View style={viewStyle} onTouchStart={handleHover}>
          <Text
            onPress={onPress}
            style={{
              color,
              textAlign,
              fontSize,
              fontWeight,
            }}
          >
            {text}
          </Text>
        </View>
      </When>
      <When isValid={isLoading}>
        <View style={viewStyle}>
          <Text
            onPress={onPress}
            style={{
              color,
              textAlign,
              fontSize,
              fontWeight,
            }}
          >
            {"Enviando..."}
          </Text>
        </View>
      </When>
    </>
  );
}
