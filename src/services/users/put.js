import { Alert } from "react-native";
import { useAxios } from "../../hooks/useAxios";
import { apiRoutes } from "../Api";
import { useMutation } from "react-query";
import { queryClient } from "../queryClient";

export function usePutUser({ navigation }) {
  const { request } = useAxios();
  const { users } = apiRoutes;

  async function putUser({ id, ...payload }) {
    const data = await request().put(users.put(id), payload);

    return data;
  }

  return useMutation(putUser, {
    onSuccess: ({ id }) => {
      navigation.navigate("Perfil", {
        userId: id,
      });

      Alert.alert("Atualizado com sucesso!");
    },
    onError: (err) => {
      queryClient.invalidateQueries(["users"]);
      Alert.alert(err.message);
    },
  });
}
