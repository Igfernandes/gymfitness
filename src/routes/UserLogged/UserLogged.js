import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../../pages/Cadastro";
import Funcionamento from "../../pages/Funcionamento";
import Principal from "../../pages/Principal";
import Perfil from "../../pages/Perfil";
import Noticacao from "../../pages/Noticacao";

const Stack = createNativeStackNavigator();

export default function UserLoggedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={Principal} />
      <Stack.Screen name="Funcionamento" component={Funcionamento} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Notify" component={Noticacao} />
    </Stack.Navigator>
  );
}
