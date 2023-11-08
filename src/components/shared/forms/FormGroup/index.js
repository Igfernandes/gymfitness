import { Text, TextInput, View } from "react-native";
import { style } from "./style";
import { colors } from "../../../../styles/colors";

export function FormGroup({
  label = "",
  value,
  setValue,
  placeholder = "",
  Icon = () => <></>,
  BeforeIcon = () => <></>,
  styleCustom = {},
  ...rest
}) {
  return (
    <View style={{ ...styleCustom, ...style.group }}>
      <Text style={style.label}>{label}:</Text>
      <Icon />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={colors.white[900]}
        style={[style.input]}
        {...rest}
      />
      <BeforeIcon />
    </View>
  );
}
