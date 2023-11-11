import { debbug } from "../../../src/helpers/debbug";
import Database from "../../config/database";

export function BaseModel() {
  /**
   * @method insert O método responsável pela a inserção de dados.
   *
   * @param {*} entity A entidade que representa a tabela que irá inserir um dado.
   *
   * @returns {number|string}
   */
  this.insert = async (entity) => {
    try {
      const pgAdmin = await Database();

      const values = await Object.fromEntries(
        Object.entries(entity.attributes).filter(
          ([columnName, columnValue]) => columnValue != null
        )
      );

      const columsIndex = await Object.keys(values);
      const columsValues = [];

      for await (const columnValue of Object.values(values)) {
        columsValues.push(
          typeof columnValue == "string" ? `'${columnValue}'` : columnValue
        );
      }

      await pgAdmin.query(
        `INSERT INTO ${entity.table}(${columsIndex.join(
          ","
        )}) VALUES (${columsValues.join(",")});`
      );

      console.log("After consult");
      const foundUser = await this.findFirst(entity, entity.attributes);
      console.log("After before");

      pgAdmin.release();
      return foundUser.id;
    } catch (err) {
      console.log(err);
      debbug(err);
      throw new Error(err);
    }
  };

  /**
   * @method update O método responsável pela a atualização de dados.
   *
   * @param {*} entity A entidade que representa a tabela a atualizar.
   * @param {object} where As cláusulas utilizadas para filtrar a busca.
   *
   * @returns {number|string}
   */
  this.update = async (entity, where) => {
    try {
      const pgAdmin = await Database();
      const queryString = [];

      const matrizAttributesFiltered = Object.entries(entity.attributes).filter(
        ([index, value]) => value != null || value != undefined
      );

      for await (const [index, value] of await Object.entries(
        where ?? {}
      ).filter(
        ([label, whereString]) =>
          whereString != null || whereString != undefined
      )) {
        queryString.push(
          `${index}=${typeof value == "string" ? `'${value}'` : value}`
        );
      }

      await pgAdmin.query(
        `UPDATE ${entity.table} SET ${matrizAttributesFiltered.map(
          ([index, value]) =>
            `${index}=${typeof value == "string" ? `'${value}'` : value}`
        )} WHERE ${queryString}`
      );

      pgAdmin.release();
    } catch (err) {
      console.log(err);
      debbug(err);
      throw new Error(err);
    }
  };

  /**
   * @method delete O método responsável pela a atualização de dados.
   *
   * @param {*} entity A entidade que representa a tabela a atualizar.
   * @param {object} where As cláusulas utilizadas para filtrar a busca.
   *
   * @returns {number|string}
   */
  this.delete = async (entity, where) => {
    try {
      const pgAdmin = await Database();
      const queryString = [];

      for await (const [index, value] of await Object.entries(
        where ?? {}
      ).filter(
        ([label, whereString]) =>
          whereString != null || whereString != undefined
      )) {
        queryString.push(
          `${index}=${typeof value == "string" ? `'${value}'` : value}`
        );
      }

      await pgAdmin.query(`DELETE FROM ${entity.table} WHERE ${queryString}`);

      pgAdmin.release();
      return true;
    } catch (err) {
      debbug(err);
      throw new Error(err);
    }
  };

  /**
   * @method findFirst O método responsável por consulta de um único registro.
   *
   * @param {*} entity A entidade que representa a tabela a atualizar.
   * @param {object} where As cláusulas utilizadas para filtrar a busca.
   * @param {Array<string>} options.columns As colunas que serão retornadas na busca.
   * @param {string} options.orders As regras a mais como ordem de organização e outros.
   *
   * @returns {number|string}
   */
  this.findFirst = async (entity, where, { columns, orders } = {}) => {
    try {
      const pgAdmin = await Database();
      const queryString = [];

      for await (const [index, value] of await Object.entries(
        where ?? {}
      ).filter(
        ([label, whereString]) =>
          whereString != null || whereString != undefined
      )) {
        queryString.push(
          `${index}=${typeof value == "string" ? `'${value}'` : value}`
        );
      }

      const data = await pgAdmin.query(
        `SELECT ${!!columns ? columns.join(",") : "*"} FROM ${
          entity.table
        } WHERE ${queryString.length > 0 ? queryString.join(" AND ") : "1=1"} ${
          orders ?? ""
        }`
      );

      const userEntities = data.rows;
      pgAdmin.release();
      return userEntities.length > 0 ? userEntities[0] : null;
    } catch (err) {
      debbug(err);
      throw new Error(err);
    }
  };

  /**
   * @method findAll O método responsável por consulta em uma tabela de multiplos registros
   *
   * @param {*} entity A entidade que representa a tabela a atualizar.
   * @param {object} where As cláusulas utilizadas para filtrar a busca.
   * @param {Array<string>} options.columns As colunas que serão retornadas na busca.
   * @param {string} options.orders As regras a mais como ordem de organização e outros.
   *
   * @returns {number|string}
   */
  this.findAll = async (entity, where, { columns, orders } = {}) => {
    try {
      const pgAdmin = await Database();
      const queryString = [];

      for await (const [index, value] of await Object.entries(
        where ?? {}
      ).filter(
        ([label, whereString]) =>
          whereString != null || whereString != undefined
      )) {
        queryString.push(
          `${index}=${typeof value == "string" ? `'${value}'` : value}`
        );
      }

      const data = await pgAdmin.query(
        `SELECT ${!!columns ? columns.join(",") : "*"} FROM ${
          entity.table
        } WHERE ${queryString.length > 0 ? queryString.join(" AND ") : "1=1"} ${
          orders ?? ""
        }`
      );

      pgAdmin.release();
      return data.rows;
    } catch (err) {
      debbug(err);
      console.log(err);
      throw new Error(err);
    }
  };
}
