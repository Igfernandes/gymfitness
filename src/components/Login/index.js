import React from "react";
import { View, Text, Image } from "react-native";
import { formStyles } from "./styles/form";
import { layoutStyles } from "./styles/layout";
import { FormGroup } from "../shared/forms/FormGroup";
import { useLogin } from "./hooks/useLogin";
import { Button } from "../shared/forms/Button";

export default function Login() {
  const { form, handleChangeEmail, handleChangePassword, handleSubmitAuth, isLoading, formHoverStyle } =
    useLogin();

  return (
    <>
      <View style={layoutStyles.contentLogo}>
        <Image
          style={layoutStyles.logo}
          source={require("@public/images/logotype.png")}
        />
      </View>
      <View style={{...layoutStyles.form, ...formHoverStyle}}>
        {/* Input Container */}
        <View>
          <Text style={formStyles.title}>
            {"Seja bem-vindo! \n Faça o seu login e comece a treinar 🙂"}
          </Text>
        </View>
        <View style={layoutStyles.content}>
          <FormGroup
            setValue={handleChangeEmail}
            value={form.email}
            label="Login"
            placeholder="Insira o seu login"
          />
          <FormGroup
            setValue={handleChangePassword}
            value={form.password}
            label="Senha"
            secureTextEntry={true}
            placeholder="Insira a sua senha"
          />
        </View>
        {/*FLEXIBILIDADE DA POSIÇÃO DO BOTÃO */}
        <View style={formStyles.groupSubmit}>
          <Button
            text="Entrar na plataforma"
            style={formStyles.btnSubmit}
            hoverStyle={formStyles.hoverBtnSubmit}
            onPress={handleSubmitAuth}
            isLoading={isLoading}
          />
        </View>
      </View>
    </>
  );
}
