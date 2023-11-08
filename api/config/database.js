import { Pool } from "pg";

/**
 * @function Database
 *
 * @description A função construtora responsável pelo instanciamento e o retorno do objeto para conexões com
 * o banco de dados utilizando postgre. O designer pattener utilizado para a estrutura é o Singleton.
 *
 * @returns {Promise<PoolClient>}
 */

export default async function Database() {
  const db = null;

  const instance = async () => {
    if (global.connection) return global.connection.connect();

    const pool = new Pool({
      Database: "gym_fitness",
      connectionString:
        "postgresql://postgres:123@localhost:5432/mydb?options=-c search_path=gym_fitness",
    });

    global.connection = pool;
    return pool.connect();
  };

  return db ? db : instance();
}
