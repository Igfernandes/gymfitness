import { useNavigation } from "@react-navigation/native";
import { useNavigations } from "../../../contexts/useNavigations";
import { useGetUser } from "../../../services/users/get";
import { useState, useEffect } from "react";

export function useDashboard() {
  const { navigate } = useNavigation();
  const { data, isFetched } = useGetUser();
  const [users, setUsers] = useState([]);
  const { handleClearUser, handleUser } = useNavigations();

  useEffect(() => {
    if (data) setUsers(data ?? []);
  }, [isFetched]);

  const handleLoggout = async () => {
    await handleClearUser();
    handleUser(null);
    navigate("Login")
  };

  return {
    handleLoggout,
    users,
  };
}
