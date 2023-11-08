import library from "express";

/**
 * @function Express
 *
 * @description A função construtora responsável pelo instanciamento e o retorno do objeto para
 * o instanciamento da rota do express. O designer pattener utilizado para a estrutura é o Singleton.
 *
 * @returns {Express}
 */

export default function Express() {
  const app = null;

  const instance = () => {
    if (global.express) return global.express;

    const app = library();

    global.express = app;
    return app;
  };

  return app ? app : instance();
}
