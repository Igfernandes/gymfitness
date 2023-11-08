import React from "react";
import { View, Text } from "react-native";
import { styleLayout } from "./styles/layout";
import { FormGroup } from "../shared/forms/FormGroup";
import { Button } from "../shared/forms/Button";
import { Select } from "../shared/forms/Select";
import { convertDateBr } from "../../helpers/convertDateBr";
import { FormGroupMask } from "../shared/forms/FormGroupMask";
import { useProfile } from "./hooks/useProfile";
import { When } from "../shared/utils/When";
import { colors } from "../../styles/colors";

export default function Profile({ navigation, data = {}, isUpdate, id }) {
  const { handleSubmit, form, setForm, isLoading } = useProfile({
    navigation,
    data,
    isUpdate,
    id
  });

  return (
    <View>
      <View style={styleLayout.form}>
        {/* Input Container */}
        <View style={styleLayout.content}>
          <FormGroup
            label="Nome completo"
            setValue={(text) => setForm({ ...form, name: text })}
            value={form.name}
            placeholder="Digite o seu nome"
          />
          <Select
            label={"Selecione o sexo biológico"}
            value={form.gender}
            options={[
              { label: "Masculino", value: "MASCULINO" },
              { label: "Feminino", value: "FEMININO" },
            ]}
            setValue={(text) => setForm({ ...form, gender: text })}
          />
          <FormGroupMask
            label="Data de nascimento"
            setValue={(text) => setForm({ ...form, birthdate: text })}
            value={form.birthdate ? convertDateBr(form.birthdate) : ""}
            placeholder="00/00/0000"
            keyboardType="numeric"
            mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
          />
          <FormGroupMask
            label="CPF"
            setValue={(text) => setForm({ ...form, cpf: text })}
            value={form.cpf}
            keyboardType="numeric"
            placeholder="000.000.000-00"
            mask={[
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
            ]}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2%",
              marginBottom: "2%",
              width: "100%",
            }}
          >
            <FormGroup
              styleCustom={{
                margimTop: "20%",
                margimBottom: "20%",
                width: "45%",
              }}
              keyboardType="numeric"
              label="Peso"
              setValue={(text) => setForm({ ...form, weight: text })}
              value={String(form.weight)}
              placeholder="00.00 kg"
            />
            <FormGroup
              styleCustom={{
                marginTop: "20%",
                marginBottom: "20%",
                width: "45%",
              }}
              keyboardType="numeric"
              label="Altura"
              setValue={(text) => setForm({ ...form, height: text })}
              value={String(form.height)}
              placeholder="000 mts"
            />
          </View>
          <FormGroupMask
            label="CEP"
            value={form.cep}
            setValue={(text) => setForm({ ...form, cep: text })}
            placeholder="00000-000"
            keyboardType="numeric"
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
          />
          <FormGroupMask
            label="Celular"
            setValue={(text) => setForm({ ...form, mobile: text })}
            value={form.mobile}
            placeholder="(00) 0 0000-0000"
            keyboardType="numeric"
            mask={[
              "(",
              /\d/,
              /\d/,
              ")",
              " ",
              /\d/,
              " ",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
          />
          <FormGroup
            label="E-mail"
            setValue={(text) => setForm({ ...form, email: text })}
            value={form.email}
            placeholder="Digite seu melhor e-mail"
          />
          <When isValid={!!form.registration}>
            <FormGroupMask
              label="Matricula"
              value={form.registration}
              placeholder="00000-00"
            />
          </When>
          <FormGroup
            label="Senha"
            setValue={(text) => setForm({ ...form, password: text })}
            value={form.password}
            placeholder="Senha (Min 6 caracteres)"
          />
          <Text style={{color: colors.white[700]}}>{'O mínimo são 4 caracteres para senha'}</Text>
          <Select
            label={"Selecione o status"}
            value={form.status}
            options={[
              { label: "Regular", value: "REGULAR" },
              { label: "Negativo", value: "NEGATIVO" },
            ]}
            setValue={(text) => setForm({ ...form, status: text })}
          />
          {/* <Select
            label={"Pacote"}
            options={[
              { label: "Musculação - 100", value: "MUSCULAÇÃO" },
              { label: "Karatê - 120", value: "KARATÊ" },
              { label: "Judô - 100", value: "JUDÔ" },
              { label: "Capoeira - 100", value: "CAPOEIRA" },
            ]}
            setValue={(text) => setForm({ ...form, pacote: text })}
          /> */}
        </View>
        {/*FLEXIBILIDADE DA POSIÇÃO DO BOTÃO */}
        <View style={styleLayout.formSubmit}>
          <Button
            text={isUpdate ? "Atualizar" : "Cadastrar"}
            style={styleLayout.btnSubmit}
            onPress={handleSubmit}
            isLoading={isLoading}
          />
        </View>
      </View>
    </View>
  );
}
