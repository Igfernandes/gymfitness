import { useState, useEffect } from "react";
import { useAuthentication } from "../../../services/authentication";
import { Keyboard, StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export function useLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { mutateAsync: authentication, isLoading } = useAuthentication();
  const [formHoverStyle, setFormHoverStyle] = useState({});

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setFormHoverStyle({
        backgroundColor: colors.black.default,
        position: "relative",
        top: "-50%",
        height: "100%"
      });
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setFormHoverStyle({});
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleChangeEmail = (text) => {
    setForm({
      ...form,
      email: text,
    });
  };

  const handleChangePassword = (text) => {
    setForm({
      ...form,
      password: text,
    });
  };

  const handleSubmitAuth = () => {
    authentication(form);
  };

  return {
    form,
    handleChangePassword,
    handleChangeEmail,
    handleSubmitAuth,
    isLoading,
    formHoverStyle
  };
}
