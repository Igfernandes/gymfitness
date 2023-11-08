import { Users } from "../../../database/entities/users";
import { BaseModel } from "../../../database/utils/baseModel";

export function GetUsersUseCase() {
  this.execute = async (where) => {
    const model = new BaseModel();
    const users = new Users();

    if (where.name) users.setName(where.name);
    if (where.cpf) users.setCPF(where.cpf);
    if (where.gender) users.setGender(where.gender);
    if (where.cep) users.setCep(where.cep);
    if (where.email) users.setEmail(where.email);

    users.setIsAdmin(false);
    if (where.mobile) users.setMobile(where.mobile);
    if (where.password) users.setPassword(where.password);
    if (where.status) users.setStatus(where.status);
    if (where.registration) users.setRegistration(where.registration);
    if (where.height) users.setHeight(where.height);
    if (where.weight) users.setWeight(where.weight);
    if (where.birthdate) users.setBirthdate(where.birthdate);

    const foundUsers = await model.findAll(users, users.attributes);

    return foundUsers.map((user) => {
      const { password, birthdate, ...data } = user.attributes;
      const birthdateInstance = new Date(birthdate);

      return {
        birthdate: `${birthdateInstance.getUTCFullYear()}-${birthdateInstance.getUTCMonth()}-${birthdateInstance.getUTCDay()}`,
        ...data,
      };
    });
  };
}
