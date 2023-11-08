import React from "react";
import Dashboard from "../components/Dashboard";
import { ScrollView, View, Text, Image } from "react-native";
import { styleLayout } from "./styles/layout";

export default function Principal({ navigation }) {
  return (
    <View style={[styleLayout.container]}>
      <View>
        <Text style={styleLayout.title}>{"Painel"}</Text>
      </View>
      <ScrollView>
        <Dashboard navigation={navigation} />
      </ScrollView>
    </View>
  );
}
