import { Users } from "../../../database/entities/users";
import { usersMapper } from "../../../database/mappers/usersMapper";
import { BaseModel } from "../../../database/utils/baseModel";

export function DeleteUsersUseCase() {
  this.execute = async ({ id }) => {
    const model = new BaseModel();
    const users = new Users();

    const foundUsers = await usersMapper(
      await model.findAll(users, {
        id,
      })
    );

    if (foundUsers.length == 0)
      throw new Error("Não foi possível encontrar o usuário.");

    await model.delete(new Users(), {
      id,
    });

    return {
      success: "Excluído com sucesso!",
    };
  };
}
