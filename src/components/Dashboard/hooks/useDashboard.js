import { useNavigation } from "@react-navigation/native";
import { useNavigations } from "../../../contexts/useNavigations";
import { useGetUser } from "../../../services/users/get";

export function useDashboard() {
  const { navigate } = useNavigation();
  const { data: users } = useGetUser();
  const { handleClearUser, handleUser } = useNavigations();

  const handleLoggout = async () => {
    await handleClearUser();
    handleUser(null);
    navigate("Login");
  };

  return {
    handleLoggout,
    users: users ? users : [],
  };
}
