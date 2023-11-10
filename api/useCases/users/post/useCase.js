import { BAD_REQUEST } from "../../../constants/status";
import { Alerts } from "../../../database/entities/alerts";
import { Users } from "../../../database/entities/users";
import { usersMapper } from "../../../database/mappers/usersMapper";
import { BaseModel } from "../../../database/utils/baseModel";

export function PostUsersUseCase() {
  this.execute = async ({ email, cpf, ...payload }) => {
    const model = new BaseModel();
    const users = new Users();
    const alerts = new Alerts();

    const foundUser = usersMapper(await model.findAll(users));

    if (await foundUser.find((user) => user.getEmail() == email))
      throw {
        message: "O e-mail já está sendo utilizado",
        code: BAD_REQUEST,
      };

    if (await foundUser.find((user) => user.getCPF() == cpf))
      throw {
        message: "O CPF já está sendo utilizado",
        code: BAD_REQUEST,
      };

    const usersData = new Users();
    usersData.setName(payload.name);
    usersData.setCPF(cpf);
    usersData.setGender(payload.gender);
    usersData.setCep(payload.cep);
    usersData.setEmail(email);
    usersData.setIsAdmin(false);
    usersData.setMobile(payload.mobile);
    usersData.setPassword(payload.password);
    usersData.setStatus(payload.status);
    usersData.setRegistration(
      `${new Date().getUTCFullYear()}-${foundUser.length}`
    );
    usersData.setHeight(payload.height);
    usersData.setWeight(payload.weight);
    usersData.setBirthdate(payload.birthdate);

    await model.insert(usersData);

    alerts.setTitle("Novo usuário");
    alerts.setDescribe(`Deem boas vindas ao novo membro ${payload.name}!`);

    await model.insert(alerts);

    return {
      success: "Usuário criado com sucesso",
    };
  };
}
