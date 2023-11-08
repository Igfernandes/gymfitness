export const ONLY_SPACES = /^\s+$/;
export const EMAIL_VALID =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const CPF_VALID = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
export const CNPJ_VALID = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
export const CPF_AND_CNPJ_VALID =
  /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
export const CEP_VALID = /^[0-9]{5}-[0-9]{3}$/;
