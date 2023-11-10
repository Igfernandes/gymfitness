import React, {
  createContext,
  useContext,
  useMemo,
} from "react";
import usePersist from "react-native-persist-context";

const NavigationsContext = createContext({});

export default function NavigationsProvider({ children }) {
  const [user, setUser, clearUser] = usePersist("appContextUser", null);

  const handleUser = (userData) => {
    setUser(userData);
  };

  const handleBackScreen = (navigation) => {
    if (navigation.canGoBack()) navigation.goBack();
    else navigation.navigate("Dashboard");
  };

  const handleClearUser = async () => {
    await clearUser();
    handleUser(null);
  };

  const contextValue = useMemo(
    () => ({
      user,
      handleUser,
      handleClearUser,
      handleBackScreen,
    }),
    [user]
  );

  return (
    <NavigationsContext.Provider value={contextValue}>
      {children}
    </NavigationsContext.Provider>
  );
}

export const useNavigations = () => useContext(NavigationsContext);
