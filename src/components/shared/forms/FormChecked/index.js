import { Text, View, Image } from "react-native";
import { styleLayout } from "./style";
import { colors } from "../../../../styles/colors";
import { useFormChecked } from "./hooks/useFormChecked";
import React, { useEffect } from "react";

export function FormChecked({
  label = "",
  value,
  setValue,
  placeholder = "",
  Icon = () => <></>,
  BeforeIcon = () => <></>,
  styleCustom = {},
  ...rest
}) {
  const { checkedStyle } = useFormChecked();

  return (
    <View style={{ ...styleCustom, ...styleLayout.group }}>
      <View
        onTouchStart={() => setValue(!value)}
        placeholder={placeholder}
        placeholderTextColor={colors.white[900]}
        style={{
          ...styleLayout.input,
          backgroundColor: value ? colors.orange.default : "transparent",
        }}
        {...rest}
      >
        <Image
          style={
            value
              ? checkedStyle
              : {
                  opacity: 0,
                }
          }
          source={require("@public/icons/checked.png")}
        />
      </View>
      <Text style={styleLayout.label}>{label}</Text>
    </View>
  );
}
