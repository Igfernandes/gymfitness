import { object, string, date, number } from "yup";
import { messages } from "./response";
import {
  CEP_VALID,
  CPF_VALID,
  EMAIL_VALID,
} from "../../../../src/constants/regex";

const MIN_LENGHT_NAME = 3;

export const putUsersSchema = object({
  id: number().required(messages.id).typeError(messages.id),
  name: string()
    .min(MIN_LENGHT_NAME, messages.name.min)
    .nullable()
    .typeError(messages.name.min),
  birthdate: string().nullable().typeError(messages.birthdate.valid),
  cpf: string()
    .nullable()
    .typeError(messages.cpf.valid)
    .matches(CPF_VALID, messages.cpf.valid),
  cep: string()
    .nullable()
    .typeError(messages.cep.valid)
    .matches(CEP_VALID, messages.cep.valid),
  gender: string()
    .equals(["MASCULINO", "FEMININO"], messages.gender.equals)
    .nullable()
    .typeError(messages.gender.required),
  email: string()
    .nullable()
    .typeError(messages.email.required)
    .matches(EMAIL_VALID, messages.email.valid),
  mobile: string().nullable().typeError(messages.mobile.required),
  password: string()
    .nullable()
    .typeError(messages.password.min),
  height: string().nullable().typeError(messages.height.invalid),
  weight: string().nullable().typeError(messages.weight.invalid),
  status: string()
    .equals(["REGULAR", "NEGATIVO"], messages.status.equals)
    .nullable()
    .typeError(messages.status.equals),
});
