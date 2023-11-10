import { BAD_BUSINESS } from "../../../constants/status";
import { Users } from "../../../database/entities/users";
import { usersMapper } from "../../../database/mappers/usersMapper";
import { BaseModel } from "../../../database/utils/baseModel";
import * as crypto from "crypto";

export function PostAuthenticationsUseCase() {
  this.execute = async ({ email, password }) => {
    const model = new BaseModel();
    const users = new Users();

    const foundUser = await usersMapper([
      await model.findFirst(users, {
        email,
        password: crypto.createHash("sha1").update(password).digest("hex"),
      }),
    ]);

    if (!foundUser)
      throw {
        message: "As credencias encontram-se incorretas",
        code: BAD_BUSINESS,
      };

    const userData = foundUser[0].attributes;
    delete userData["password"];

    return {
      success: "Usuário criado com sucesso",
      user: userData,
    };
  };
}
