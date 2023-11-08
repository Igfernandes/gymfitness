export function UserHasAlertMigration() {
  this.execute = async (pgAdmin) => {
    await pgAdmin.query(`CREATE TABLE IF NOT EXISTS user_has_alert (
      user_id         INT NOT NULL,
      alert_id        INT NOT NULL,
      PRIMARY KEY ("user_id", "alert_id"),
      CONSTRAINT "fk_user_has_alerts_user"
        FOREIGN KEY ("user_id")
        REFERENCES "users" ("id")
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT "fk_user_has_alerts_alerts1"
        FOREIGN KEY ("alert_id")
        REFERENCES "alerts" ("id")
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
    )`);
  };
}
