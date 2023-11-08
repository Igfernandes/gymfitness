import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenticationStack from "./Authentication";
import UserLoggedStack from "./UserLogged/UserLogged";
import { enableFreeze } from "react-native-screens";

enableFreeze(true);
const StackNavigator = createNativeStackNavigator();

export default function Routes() {

  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AuthStack"
    >
      <StackNavigator.Screen name="UserLogged" component={UserLoggedStack} />
      <StackNavigator.Screen name="AuthStack" component={AuthenticationStack} />
    </StackNavigator.Navigator>
  );
}
