import { Users } from "../entities/users";

export function usersMapper(usersData = []) {
  return usersData.map((user) => {
    const users = new Users();

    users.setId(user.id);
    users.setName(user.name);
    users.setCPF(user.cpf);
    users.setGender(user.gender);
    users.setCep(user.cep);
    users.setEmail(user.email);
    users.setIsAdmin(user.is_admin);
    users.setMobile(user.mobile);
    users.setPassword(user.password);
    users.setStatus(user.status);
    users.setRegistration(user.registration);
    users.setHeight(user.height);
    users.setWeight(user.weight);
    users.setBirthdate(user.birthdate);
    if (user.recovery) users.setRecovery(user.recovery);
    users.setCreatedAt(user.created_at);
    users.setUpdatedAt(user.updated_at);

    return users;
  });
}
