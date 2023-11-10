import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import NavigationProvider from "./src/contexts/useNavigation";
import { Headers } from "./src/components/shared/globals/headers";
import { queryClient } from "./src/services/queryClient";
import { QueryClientProvider } from "react-query";
import { StatusBar } from "react-native";
import NavigationsProvider from "./src/contexts/useNavigations";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
      <NavigationsProvider>
        <NavigationProvider>
          <StatusBar barStyle="light-content" />
          <Headers />
          <Routes />
        </NavigationProvider>
        </NavigationsProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
