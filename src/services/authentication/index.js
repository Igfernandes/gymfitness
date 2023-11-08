import { useNavigation } from "../../contexts/useNavigation";
import { Alert } from "react-native";
import { useAxios } from "../../hooks/useAxios";
import { apiRoutes } from "../Api";
import { useMutation } from "react-query";

export function useAuthentication() {
  const { handleUser, handleStep } = useNavigation();
  const { request } = useAxios();
  const { auth } = apiRoutes;

  async function authentication({ email, password }) {
    const data = await request().post(auth, { email, password });

    return data;
  }

  return useMutation(authentication, {
    onSuccess: ({ data }) => {
      handleUser(data.user);
      handleStep("logged");
    },
    onError: (err) => {
      Alert.alert("Credenciais inválidas");
    },
  });
}
