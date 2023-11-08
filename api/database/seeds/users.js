import { users } from "../../data/users";
import { Users } from "../entities/users";

export function UsersSeeds() {
  this.execute = async (pgAdmin) => {
    for await (const user of users) {
      const usersEntity = new Users(user);

      usersEntity.setName(user.name);
      usersEntity.setEmail(user.email);
      usersEntity.setBirthdate(user.birthdate);
      usersEntity.setGender(user.gender);
      usersEntity.setPassword(user.password);
      usersEntity.setMobile(user.mobile);
      usersEntity.setRegistration(user.registration);
      usersEntity.setCPF(user.cpf);
      usersEntity.setCep(user.cep);
      usersEntity.setStatus(user.status);
      usersEntity.setIsAdmin(user.is_admin);

      const { birthdate, ...where } = user;

      const foundUser = await pgAdmin.findFirst(usersEntity, where);

      if (!foundUser) await pgAdmin.insert(usersEntity);
    }
    console.log("** SEEDS USERS INSERIDOS COM SUCESSO ** QTD: " + users.length);
  };
}
