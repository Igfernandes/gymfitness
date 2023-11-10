import { View, Image, SafeAreaView } from "react-native";
import { styleHeader } from "./style/styleHeader";
import { When } from "../../utils/When";
import { useNavigations } from "../../../../contexts/useNavigations";
import { useNavigation } from "@react-navigation/native";

export function Headers() {
  const { navigate } = useNavigation();
  const { user } = useNavigations();

  return (
    <When isValid={!!user}>
      <SafeAreaView style={styleHeader.content}>
        <View style={styleHeader.box} onTouchStart={() => navigate("Dashboard")}>
          <Image
            style={styleHeader.logo}
            source={require("@public/images/logotype.png")}
          />
        </View>
        <View style={{ ...styleHeader.box, justifyContent: "flex-end" }}>
          <View onTouchStart={() => navigate("Notificacao")}>
            <Image
              style={styleHeader.notifyIcon}
              source={require("@public/icons/bell.png")}
            />
          </View>
          {/* <View>
            <Image
              style={styleHeader.menuIcon}
              source={require("@public/icons/align-right.png")}
            />
          </View> */}
        </View>
      </SafeAreaView>
    </When>
  );
}
