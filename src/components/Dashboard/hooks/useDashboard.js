import { useNavigation } from "../../../contexts/useNavigation";
import { useGetUser } from "../../../services/users/get";
import { useState, useEffect } from "react";

export function useDashboard() {
  const { data, isFetched } = useGetUser();
  const [users, setUsers] = useState([]);
  const { handleClearUser, handleStep, handleUser } = useNavigation();

  useEffect(() => {
    if (data) setUsers(data ?? []);
  }, [isFetched]);

  const handleLoggout = async () => {
    await handleClearUser();
    handleUser(null);
    handleStep("auth");
  };

  return {
    handleLoggout,
    users,
  };
}
