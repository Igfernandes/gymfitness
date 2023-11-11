import { BAD_REQUEST } from "../../../constants/status";
import { Users } from "../../../database/entities/users";
import { usersMapper } from "../../../database/mappers/usersMapper";
import { BaseModel } from "../../../database/utils/baseModel";

export function PutUsersUseCase() {
  this.execute = async ({ id, ...where }) => {
 
    const model = new BaseModel();
    const users = new Users();

    const foundUser = await usersMapper(await model.findAll(users));
    
    if (
      await foundUser.find(
        (user) => user.getEmail() == where.email && user.getId() != id
      )
    )
      throw {
        message: "O e-mail já está sendo utilizado",
        code: BAD_REQUEST,
      };

    if (
      await foundUser.find(
        (user) => user.getCPF() == where.cpf && user.getId() != id
      )
    )
      throw {
        message: "O CPF já está sendo utilizado",
        code: BAD_REQUEST,
      };

    const usersData = new Users();
    if (where.name) usersData.setName(where.name);
    if (where.cpf) usersData.setCPF(where.cpf);
    if (where.gender) usersData.setGender(where.gender);
    if (where.cep) usersData.setCep(where.cep);
    if (where.email) usersData.setEmail(where.email);

    usersData.setIsAdmin(false);
    if (where.mobile) usersData.setMobile(where.mobile);
    if (where.password) usersData.setPassword(where.password);
    if (where.status) usersData.setStatus(where.status);
    if (where.registration) usersData.setRegistration(where.registration);
    if (where.height) usersData.setHeight(where.height);
    if (where.weight) usersData.setWeight(where.weight);
    if (where.birthdate) usersData.setBirthdate(where.birthdate);

    await model.update(usersData, {
      id,
    });

    return {
      success: "Usuário criado com sucesso",
      id,
    };
  };
}
