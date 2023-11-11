import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { ScrollView, View, Text } from "react-native";
import { styleLayout } from "./styles/layout";
import { useGetTimelines } from "../services/timelines/get";

export default function Principal({ navigation }) {
  const { data: timelinesData } = useGetTimelines();
  
  return (
    <View style={[styleLayout.container]}>
      <View>
        <Text style={styleLayout.title}>{"Painel"}</Text>
      </View>
      <ScrollView>
        <Dashboard navigation={navigation} timesOperation={timelinesData} />
      </ScrollView>
    </View>
  );
}
