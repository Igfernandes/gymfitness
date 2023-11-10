import { Alerts } from "../../../database/entities/alerts";
import { alertsMapper } from "../../../database/mappers/alertsMapper";
import { BaseModel } from "../../../database/utils/baseModel";

export function GetAlertsUseCase() {
  this.execute = async () => {
    const model = new BaseModel();
    const alerts = new Alerts();

    const foundAlerts = alertsMapper(await model.findAll(alerts));

    return foundAlerts.map((alert) => alert.attributes);
  };
}
