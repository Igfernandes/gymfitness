export function BaseMappers() {
  this.mapper = async (entity, data) => {
    const arrEntities = [];

    for await (const dataCurrent of data) {
      const newEntity = entity;
      for await (const [columnName, columnValue] of Object.entries(
        entity.attributes
      )) {
        newEntity.attributes[columnName] = dataCurrent[columnName];
      }
      arrEntities.push(newEntity);
    }

    return arrEntities;
  };
}
