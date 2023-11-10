import { View, Image, Text, ScrollView } from "react-native";
import { styleLayout } from "./style/layout";
import { Notify } from "./Notify";
import { useNavigation } from "@react-navigation/native";

export function Notifies({ notifies }) {
  const { navigate } = useNavigation();

  console.log(notifies)
  return (
    <View style={styleLayout.container}>
      <View onTouchStart={() => navigate("Dashboard")}>
        <Image source={require("@public/icons/arrow-narrow-right.png")} />
      </View>
      <View style={styleLayout.box}>
        <Text style={styleLayout.title}>{"Notificações"}</Text>
        <Text style={styleLayout.counter}>{`(${notifies.length})`}</Text>
      </View>
      <ScrollView>
        {notifies.map((props, key) => (
          <Notify
            key={key}
            name={props.title}
            message={props.describe}
            date={props.published_at}
          />
        ))}
      </ScrollView>
    </View>
  );
}
