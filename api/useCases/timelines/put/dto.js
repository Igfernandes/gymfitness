import { object, string } from "yup";

export const putTimelinesSchema = object({
  segunda: object({
    abertura: string(),
    termino: string(),
  }),
  terca: object({
    abertura: string(),
    termino: string(),
  }),
  quarta: object({
    abertura: string(),
    termino: string(),
  }),
  quinta: object({
    abertura: string(),
    termino: string(),
  }),
  sexta: object({
    abertura: string(),
    termino: string(),
  }),
  sabado: object({
    abertura: string(),
    termino: string(),
  }),
  domingo: object({
    abertura: string(),
    termino: string(),
  }),
});
