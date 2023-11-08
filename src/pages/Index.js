import React from "react";
import { View, Image, SafeAreaView } from "react-native";
import Login from "../components/Login";
import { layoutStyles } from "../components/Login/styles/layout";

export default function Index({ navigation }) {
  return (
    <View style={[layoutStyles.container]}>
      <Image
        style={layoutStyles.wallaper}
        source={require("@public/images/wallpapers/wallpaper-login.png")}
      />
      <View style={layoutStyles.layerWallper} />

      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </View>
  );
}
