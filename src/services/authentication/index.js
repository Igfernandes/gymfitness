import { Alert } from "react-native";
import { useAxios } from "../../hooks/useAxios";
import { apiRoutes } from "../Api";
import { useMutation } from "react-query";
import { useNavigations } from "../../contexts/useNavigations";
import { useNavigation } from "@react-navigation/native";

export function useAuthentication() {
  const { navigate } = useNavigation();
  const { handleUser } = useNavigations();
  const { request } = useAxios();
  const { auth } = apiRoutes;

  async function authentication({ email, password }) {
    const data = await request().post(auth, { email, password });

    return data;
  }

  return useMutation(authentication, {
    onSuccess: ({ data }) => {
      handleUser(data.user);
      navigate("UserLogged");
    },
    onError: (err) => {
      Alert.alert("Credenciais inválidas");
    },
  });
}
