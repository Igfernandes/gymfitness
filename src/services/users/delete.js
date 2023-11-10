import { Alert } from "react-native";
import { useAxios } from "../../hooks/useAxios";
import { apiRoutes } from "../Api";
import { useMutation } from "react-query";
import { queryClient } from "../queryClient";

export function useDeleteUser({ navigation }) {
  const { request } = useAxios();
  const { users } = apiRoutes;

  async function deleteUser(id) {
    const data = await request().delete(users.delete(id));

    return data;
  }

  return useMutation(deleteUser, {
    onSuccess: () => {
      navigation.navigate("Dashboard");

      Alert.alert("Excluído com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => {
      Alert.alert(err.message);
    },
  });
}
