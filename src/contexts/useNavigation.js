import React, { createContext, useContext, useState } from "react";
import usePersist from "react-native-persist-context";

const NavigationContext = createContext({});

export default function NavigationProvider({ children }) {
  const [user, setUser, clearUser] = usePersist("appContext", {
    seis: "",
  });
  const [step, setStep] = useState("auth");

  const handleUser = (userData) => {
    setUser(userData);
  };

  const handleStep = (step) => {
    if (step) {
      setStep(step);
    }
  };

  const handleBackScreen = (navigation) => {
    if (navigation.canGoBack()) navigation.goBack();
    else navigation.navigate("Dashboard");
  };

  const handleClearUser = () => {
    clearUser();
    handleUser(null);
  };

  return (
    <NavigationContext.Provider
      value={{
        user,
        handleUser,
        handleClearUser,
        handleStep,
        step,
        handleBackScreen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);
