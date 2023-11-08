import React from "react";
import Profile from "../components/Profile";
import { ScrollView, View, Text, Image } from "react-native";
import { styleLayout } from "./styles/layout";

export default function Cadastro({ navigation }) {
  return (
    <View style={[styleLayout.container]}>
      <View onTouchStart={() => navigation.goBack()}>
        <Image source={require("@public/icons/arrow-narrow-right.png")} />
      </View>
      <View>
        <Text style={styleLayout.title}>{"Novo Cadastro"}</Text>
        <Text style={styleLayout.subtitle}>
          {"Preencha os dados para enviar o convite para o usuário."}
        </Text>
      </View>
      <ScrollView>
        <Profile data={{}} navigation={navigation} />
      </ScrollView>
    </View>
  );
}
