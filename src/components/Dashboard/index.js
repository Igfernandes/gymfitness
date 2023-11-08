import { Button } from "../shared/forms/Button";
import BoxTimeOperation from "../shared/layout/BoxTimeOperation";
import { BoxText } from "../shared/layout/boxText";
import CardUser from "./CardUser";
import { useDashboard } from "./hooks/useDashboard";
import { styleLayout } from "./style/layout";
import { View, Text } from "react-native";

export default function Dashboard({ navigation }) {
  const { handleLoggout, users } = useDashboard();

  return (
    <View>
      <BoxText
        boxes={[
          {
            icon: require("@public/icons/users-plus.png"),
            link: "Cadastro",
            label: "Cadastrar Usuários",
          },
          {
            icon: require("@public/icons/adjustments-horizontal.png"),
            link: "Funcionamento",
            label: "Alterar funcionamento",
          },
        ]}
        navigation={navigation}
      />
      <BoxTimeOperation />
      <View style={styleLayout.box}>
        <Text style={styleLayout.title}>{"Lista de usuários"}</Text>
        <Text style={styleLayout.counter}>{`(${users.length})`}</Text>
      </View>
      <Text style={styleLayout.subtitle}>
        {"Acompanhe os clientes presentes na academia."}
      </Text>
      {users.map((user) => (
        <CardUser
          id={user.id}
          age={user.birthdate}
          height={user.height}
          weight={user.weight}
          name={user.name}
          gender={user.gender}
          status={user.status}
          key={user.name}
          navigation={navigation}
        />
      ))}
      <Button
        text={"Desconectar Usuário"}
        style={styleLayout.loggoutBtn}
        onPress={handleLoggout}
      />
    </View>
  );
}
