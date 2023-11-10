import React, { useEffect } from "react";
import { View, Image, SafeAreaView } from "react-native";
import Login from "../components/Login";
import { layoutStyles } from "../components/Login/styles/layout";
import { useNavigations } from "../contexts/useNavigations";

export default function Index({ navigation }) {
  const { handleClearUser } = useNavigations();

  useEffect(() => {
    handleClearUser();
  }, []);

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
