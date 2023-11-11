import { Alert } from "react-native";
import { useAxios } from "../../hooks/useAxios";
import { apiRoutes } from "../Api";
import { useMutation, useQueryClient } from "react-query";

export function usePutTimelines() {
  const queryClient = useQueryClient();
  const { request } = useAxios();
  const { timelines } = apiRoutes;

  async function putTimelines(payload) {
    const data = await request().put(timelines.default, payload);

    return data;
  }

  return useMutation(putTimelines, {
    onSuccess: () => {
      Alert.alert("Atualizado com sucesso!");
      queryClient.invalidateQueries(["timelines"]);
    },
    onError: (err) => {
      Alert.alert(err.message);
    },
  });
}
