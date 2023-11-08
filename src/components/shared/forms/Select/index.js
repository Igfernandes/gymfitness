import { View, Text, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { style } from "./style";
import { colors } from "../../../../styles/colors";

export function Select({
  label,
  options,
  setValue,
  value,
  style: styleSelect,
  select = { style: (inputStyle = {}) },
}) {
  return (
    <View style={{ ...style.group, ...styleSelect }}>
      <Text style={style.label}>{label}:</Text>
      <View style={{ ...style.input, ...select.style }}>
        <RNPickerSelect
          style={{
            inputIOS: { color: colors.white.default },
            inputAndroid: { color: colors.white.default },
          }}
          value={value}
          onValueChange={setValue}
          placeholder={{
            label,
          }}
          items={options}
        />
        <Image
          style={style.iconInput}
          source={require("@public/icons/square-rounded-chevron-up.png")}
        />
      </View>
    </View>
  );
}
