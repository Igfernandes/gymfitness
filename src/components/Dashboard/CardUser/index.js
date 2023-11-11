import { Text, View } from "react-native";
import { styleLayout } from "./style";
import { capitalize } from "../../../helpers/capitalize";
import { convertDateBr } from "../../../helpers/convertDateBr";
import { When } from "../../shared/utils/When";
import { colors } from "../../../styles/colors";

export default function CardUser({
  id,
  name,
  age,
  status,
  weight,
  height,
  gender,
  navigation,
}) {
  return (
    <View style={styleLayout.content}>
      <View style={styleLayout.box}>
        <View style={styleLayout.group}>
          <Text style={styleLayout.text}>{capitalize(name)}</Text>
        </View>
        <View style={styleLayout.group}>
          <Text style={styleLayout.text}>
            {`Status: `}
            <When isValid={status == "REGULAR"}>
              <Text
                style={{
                  color: colors.green.default,
                }}
              >
                {status}
              </Text>
            </When>
            <When isValid={status == "NEGATIVO"}>
              <Text
                style={{
                  color: colors.red.default,
                }}
              >
                {status}
              </Text>
            </When>
          </Text>
        </View>
      </View>
      <View style={styleLayout.box}>
        <View style={styleLayout.group}>
          <Text style={styleLayout.title}>
            {`Sexo: `}
            <Text style={styleLayout.text}>
              {capitalize(gender.toLowerCase())}
            </Text>
          </Text>
        </View>
        <View style={styleLayout.group}>
          <Text style={styleLayout.title}>
            {`Idade: `}
            <Text style={styleLayout.text}>
              {convertDateBr(String(age).split("T")[0])}
            </Text>
          </Text>
        </View>
        <View style={styleLayout.group}>
          <Text style={styleLayout.title}>
            {`Peso: `}
            <Text style={styleLayout.text}>{`${weight} Kg`}</Text>
          </Text>
        </View>
      </View>
      <View style={styleLayout.box}>
        <View style={styleLayout.group}>
          <Text style={styleLayout.title}>
            {`Altura: `}
            <Text style={styleLayout.text}>{`${height} Cm`}</Text>
          </Text>
        </View>
        <View
          onTouchStart={() =>
            navigation.navigate("Perfil", {
              userId: id,
            })
          }
        >
          <Text style={styleLayout.link}>{"Mostrar Detalhes"}</Text>
        </View>
      </View>
    </View>
  );
}
