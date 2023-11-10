export function AlertsMigration() {
  this.execute = async (pgAdmin) => {
    await pgAdmin.query(`CREATE TABLE IF NOT EXISTS alerts (
        id            SERIAL PRIMARY KEY,
        title         VARCHAR(250) NOT NULL,
        describe      TEXT NOT NULL,
        published_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`);
  };
}
