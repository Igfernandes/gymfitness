export function TimelineMigration() {
  this.execute = async (pgAdmin) => {
    await pgAdmin.query(`CREATE TABLE IF NOT EXISTS timeline (
        id              SERIAL PRIMARY KEY,
        weekday         VARCHAR(20) NOT NULL,
        time_opened     TIME NOT NULL,
        time_closed     TIME NOT NULL,
        created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`);
  };
}
