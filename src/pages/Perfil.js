import React, { useEffect, useState } from "react";
import Profile from "../components/Profile";
import { ScrollView, View, Text, Image } from "react-native";
import { styleLayout } from "./styles/layout";
import { useGetUser } from "../services/users/get";

export default function Perfil({ navigation, route }) {
  const userIdCurrent = route.params.userId;
  const { data, isFetched } = useGetUser({
    id: userIdCurrent,
  });
  const [user, setUser] = useState();

  useEffect(() => {
    if (data) setUser(data[0]);
  }, [isFetched]);

  return (
    <View style={[styleLayout.container]}>
      <View onTouchStart={() => navigation.goBack()}>
        <Image source={require("@public/icons/arrow-narrow-right.png")} />
      </View>
      <View>
        <Text style={styleLayout.title}>{"Edição de Perfil"}</Text>
        <Text style={styleLayout.subtitle}>
          {"Atualize as informações do usuário abaixo"}
        </Text>
      </View>
      <ScrollView>
        <Profile navigation={navigation} data={user} isUpdate={true} id={userIdCurrent} />
      </ScrollView>
    </View>
  );
}
