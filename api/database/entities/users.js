import { CEP_VALID, CPF_VALID, EMAIL_VALID, ONLY_SPACES } from "../../../src/constants/regex";
import * as crypto from "crypto";

export function Users() {
  this.table = "users";
  this.attributes = {
    id: null,
    name: null,
    birthdate: null,
    cpf: null,
    gender: null,
    weight: null,
    height: null,
    email: null,
    mobile: null,
    password: null,
    recovery: null,
    registration: null,
    cep: null,
    is_admin: null,
    status: null,
    created_at: null,
    updated_at: null,
  };

  this.getId = () => {
    return this.attributes.id;
  };

  this.setId = (id) => {
    if ((typeof id != "bigint" && typeof id != "number") || ONLY_SPACES.test(id))
      throw new Error("O id inserido não é um numero válido");

    this.attributes.id = id;
  };

  this.getName = () => {
    return this.attributes.name;
  };

  this.setName = (name) => {
    if (typeof name != "string" || ONLY_SPACES.test(name))
      throw new Error("O nome inserido não é uma string");

    this.attributes.name = name;
  };

  this.getBirthdate = () => {
    return this.attributes.birthdate;
  };

  this.setBirthdate = (birthdate) => {
    if (typeof birthdate != "string" || ONLY_SPACES.test(birthdate))
      throw new Error("O nome inserido não é uma string");

    this.attributes.birthdate = birthdate;
  };

  this.getBirthdate = () => {
    return this.attributes.birthdate;
  };

  this.setBirthdate = (birthdate) => {
    this.attributes.birthdate = birthdate;
  };

  this.getGender = () => {
    return this.attributes.gender;
  };

  this.setGender = (gender) => {
    if (!["MASCULINO", "FEMININO"].includes(gender))
      throw new Error(
        'O gênero inserido precisa ser "MASCULINO" ou "FEMININO"'
      );

    this.attributes.gender = gender;
  };

  this.getEmail = () => {
    return this.attributes.email;
  };

  this.setEmail = (email) => {
    if (typeof email != "string" || !EMAIL_VALID.test(email))
      throw new Error("O e-mail inserido não é válido");

    this.attributes.email = email;
  };

  this.getCep = () => {
    return this.attributes.cep;
  };

  this.setCep = (cep) => {
    if (typeof cep != "string" || !CEP_VALID.test(cep))
    throw new Error("O CEP inserido não é válido");

    this.attributes.cep = cep;
  };

  this.getPassword = () => {
    return this.attributes.password;
  };

  this.setPassword = (password) => {
    if (typeof password != "string" || password.length < 5)
      throw new Error("O password inserido não é válido");

    this.attributes.password = crypto
      .createHash("sha1")
      .update(password)
      .digest("hex");
  };

  this.getCPF = () => {
    return this.attributes.cpf;
  };

  this.setCPF = (cpf) => {
    if (typeof cpf != "string" || !CPF_VALID.test(cpf))
      throw new Error("O CPF inserido não é válido");

    this.attributes.cpf = cpf;
  };

  this.getMobile = () => {
    return this.attributes.mobile;
  };

  this.setMobile = (mobile) => {
    if (typeof mobile != "string")
      throw new Error("O mobile inserido não é válido");

    this.attributes.mobile = mobile;
  };

  this.getIsAdmin = () => {
    return this.attributes.is_admin;
  };

  this.setIsAdmin = (is_admin) => {
    if (typeof is_admin != "boolean")
      throw new Error("O is_admin inserido não é válido");

    this.attributes.is_admin = is_admin;
  };

  this.getStatus = () => {
    return this.attributes.status;
  };

  this.setStatus = (status) => {
    this.attributes.status = status;
  };

  this.getHeight = () => {
    return this.attributes.height;
  };

  this.setHeight = (height) => {
    this.attributes.height = height;
  };

  this.getWeight = () => {
    return this.attributes.weight;
  };

  this.setWeight = (weight) => {
    this.attributes.weight = weight;
  };

  this.getRegistration = () => {
    return this.attributes.registration;
  };

  this.setRegistration = (registration) => {
    if (typeof registration != "string" || ONLY_SPACES.test(registration))
      throw new Error("A palavra de recuração inserida não é válida");

    this.attributes.registration = registration;
  };

  this.getRecovery = () => {
    return this.attributes.recovery;
  };

  this.setRecovery = (recovery) => {
    if (typeof recovery != "string" || ONLY_SPACES.test(recovery))
      throw new Error("A palavra de recuração inserida não é válida");

    this.attributes.recovery = recovery;
  };

  this.getCreatedAt = () => {
    return this.attributes.created_at;
  };

  this.setCreatedAt = (createdAt) => {
    this.attributes.created_at = createdAt;
  };

  this.getUpdatedAt = () => {
    return this.attributes.updated_at;
  };

  this.setUpdatedAt = (updateddAt) => {
    this.attributes.updated_at = updateddAt;
  };
}
