import { Alert } from "react-native";
import { useAxios } from "../../hooks/useAxios";
import { apiRoutes } from "../Api";
import { useMutation } from "react-query";
import { queryClient } from "../queryClient";
import { convertDateBrToDefault } from "../../helpers/convertDateBrToDefault";

export function usePostUser({ navigation }) {
  const { request } = useAxios();
  const { users } = apiRoutes;

  async function postUser({ birthdate, ...payload }) {
    const data = await request().post(users.default, {
      birthdate: convertDateBrToDefault(birthdate),
      ...payload,
    });

    return data;
  }

  return useMutation(postUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      queryClient.invalidateQueries({ queryKey: ["alerts"] });
      navigation.navigate("Dashboard");
    },
    onError: (err) => {
      Alert.alert(err.message);
    },
  });
}
