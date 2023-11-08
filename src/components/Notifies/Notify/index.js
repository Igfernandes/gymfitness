import { When } from "../../shared/utils/When";
import { View, Text } from "react-native";
import { styleLayout } from "./style/layout";

export function Notify({
  name = "",
  date = "",
  message = "",
  status = "NOT_VIEWED",
}) {
  return (
    <View style={styleLayout.content}>
      <View style={styleLayout.box}>
        <View style={styleLayout.groupName}>
          <Text style={styleLayout.name}>{name}</Text>
          <When isValid={status == "NOT_VIEWED"}>
            <View style={styleLayout.iconViewer}></View>
          </When>
        </View>
        <View>
          <Text style={styleLayout.date}>{date}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styleLayout.message}>{message}</Text>
        </View>
        {/* <View>
          <Image source={require("@public/icons/square-rounded-x.png")} />
        </View> */}
      </View>
    </View>
  );
}
