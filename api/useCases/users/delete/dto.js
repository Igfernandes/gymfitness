import { object, number } from "yup";
import { messages } from "./response";

export const deleteUsersSchema = object({
  id: number().nullable().typeError(messages.id)
});
