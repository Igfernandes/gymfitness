import { object, string, date } from "yup";
import { messages } from "./response";
import {
  CEP_VALID,
  CPF_VALID,
  EMAIL_VALID,
} from "../../../../src/constants/regex";

const MIN_LENGHT_NAME = 3;
const MIN_LENGHT_PASSWORD = 5;

export const postUsersSchema = object({
  name: string()
    .min(MIN_LENGHT_NAME, messages.name.min)
    .required(messages.name.required)
    .typeError(messages.name.required),
  birthdate: string()
    .required(messages.birthdate.required)
    .typeError(messages.birthdate.valid),
  cpf: string()
    .required(messages.cpf.required)
    .typeError(messages.cpf.required)
    .matches(CPF_VALID, messages.cpf.valid),
  cep: string()
    .required(messages.cep.required)
    .typeError(messages.cep.required)
    .matches(CEP_VALID, messages.cep.valid),
  gender: string()
    .equals(["MASCULINO", "FEMININO"], messages.gender.equals)
    .required(messages.gender.required)
    .typeError(messages.gender.required),
  email: string()
    .required(messages.email.required)
    .typeError(messages.email.required)
    .matches(EMAIL_VALID, messages.email.valid),
  mobile: string()
    .required(messages.mobile.required)
    .typeError(messages.mobile.required),
  password: string()
    .min(MIN_LENGHT_PASSWORD, messages.password.min)
    .required(messages.password.required)
    .typeError(messages.password.required),
  height: string()
    .required(messages.height.required)
    .typeError(messages.height.required),
  weight: string()
    .required(messages.weight.required)
    .typeError(messages.weight.required),
  status: string()
    .equals(["REGULAR"], messages.status.equals)
    .required(messages.status.required)
    .typeError(messages.status.required),
});
