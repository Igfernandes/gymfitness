import { Text, TextInput, View } from "react-native";
import { style } from "./style";
import { colors } from "../../../../styles/colors";
import MaskInput from "react-native-mask-input";

export function FormGroupMask({
  label = "",
  value,
  setValue,
  placeholder = "",
  Icon = () => <></>,
  BeforeIcon = () => <></>,
  styleCustom = {},
  mask,
  ...rest
}) {
  return (
    <View style={{ ...styleCustom, ...style.group }}>
      <Text style={style.label}>{label}:</Text>
      <Icon />
      <MaskInput
        value={value}
        onChangeText={(masked, unmasked) => {
          setValue(masked); // you can use the unmasked value as well
        }}
       mask={mask}
        placeholder={placeholder}
        placeholderTextColor={colors.white[900]}
        style={[style.input]}
        {...rest}
      />
      <BeforeIcon />
    </View>
  );
}
