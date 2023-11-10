import Database from "../../config/database";
import { AlertsMigration } from "./alerts";
import { TimelineMigration } from "./timeline";
import { UserHasAlertMigration } from "./userHasAlert";
import { UsersMigration } from "./users";

function MigrationInit() {
  this.execute = async () => {
    const pgAdmin = await Database();
    await pgAdmin.query(`
    DROP SCHEMA gym_fitness CASCADE;
    CREATE SCHEMA gym_fitness;
    
    GRANT ALL ON SCHEMA gym_fitness TO postgres;`);

    const usersMigration = new UsersMigration();
    usersMigration.execute(pgAdmin);

    const timelineMigration = new TimelineMigration();
    timelineMigration.execute(pgAdmin);

    const alertsMigration = new AlertsMigration();
    alertsMigration.execute(pgAdmin);

    const userHasAlert = new UserHasAlertMigration();
    userHasAlert.execute(pgAdmin);

    pgAdmin.release();
  };
}

export const migrations = new MigrationInit().execute();
