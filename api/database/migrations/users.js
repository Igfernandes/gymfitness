export function UsersMigration() {
  this.execute = async (pgAdmin) => {
    await pgAdmin.query(`
      DROP TYPE IF EXISTS GENDER;
      CREATE TYPE GENDER AS ENUM ('MASCULINO', 'FEMININO');
    
      CREATE TABLE IF NOT EXISTS users (
        id            SERIAL PRIMARY KEY,
        name          VARCHAR(100) NOT NULL,
        birthdate     DATE NOT NULL,
        cpf           VARCHAR(25) NOT NULL UNIQUE,
        gender        GENDER NOT NULL,
        weight        INT,
        height        INT,
        email         VARCHAR(250) NOT NULL UNIQUE,
        mobile        VARCHAR(30) NOT NULL, 
        password      VARCHAR(250) NOT NULL,
        registration  VARCHAR(10) NOT NULL  UNIQUE,
        recovery      VARCHAR(100),
        cep           VARCHAR(30),
        is_admin      BOOLEAN DEFAULT(FALSE),
        status        VARCHAR(10),
        created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`);
  };
}
