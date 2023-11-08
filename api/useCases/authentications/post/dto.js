import { object, string } from "yup";
import { messages } from "./response";
import { EMAIL_VALID } from "../../../../src/constants/regex";

const MIN_LENGHT_PASSWORD = 5;

export const postUsersSchema = object({
  email: string()
    .required(messages.email.required)
    .typeError(messages.email.required)
    .matches(EMAIL_VALID, messages.email.valid),
  password: string()
    .min(MIN_LENGHT_PASSWORD, messages.password.min)
    .required(messages.password.required)
    .typeError(messages.password.required),
});
