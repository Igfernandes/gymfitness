import { timesOperation } from "./__mooks__/timesOperation";
import { useTimesOperation } from "./hooks/useTimesOperation";
import { View, Text } from "react-native";
import { styleLayout } from "./style";
import { When } from "../../utils/When";

export default function BoxTimeOperation() {
  const { weekDays, getHours, getStatus, isStatusCurrent } =
    useTimesOperation(timesOperation);

  return (
    <View style={styleLayout.content}>
      <View>
        <Text style={styleLayout.title}>{"Funcionamento"}</Text>
      </View>
      <View style={styleLayout.list}>
        {weekDays.map((day) => (
          <View style={styleLayout.row} key={day}>
            <View style={styleLayout.weekDay}>
              <Text style={styleLayout.text}>{day}</Text>
            </View>
            <View style={styleLayout.hours}>
              <Text style={{ ...styleLayout.text, ...styleLayout.hoursText }}>
                {getHours(day)}
              </Text>
            </View>
            <When isValid={getStatus(day) == "Aberto"}>
              <View style={styleLayout.status}>
                <Text style={styleLayout.opened(isStatusCurrent(day))}>
                  {getStatus(day)}
                </Text>
              </View>
            </When>
            <When isValid={getStatus(day) == "Fechado"}>
              <View style={styleLayout.status}>
                <Text style={styleLayout.closed(isStatusCurrent(day))}>
                  {getStatus(day)}
                </Text>
              </View>
            </When>
          </View>
        ))}
      </View>
    </View>
  );
}
