import { BaseModel } from "../utils/baseModel";
import { UsersSeeds } from "./users";

function SeedsInit() {
  this.execute = async () => {
    const pgAdmin = await new BaseModel();
    const users = new UsersSeeds();

    await users.execute(pgAdmin);

    return process.exit(0);
  };
}

export const seeds = new SeedsInit().execute();
