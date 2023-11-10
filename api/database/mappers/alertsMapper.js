import { Alerts } from "../entities/alerts";

export function alertsMapper(alertsData = []) {
  return alertsData.map((alertsItem) => {
    const alerts = new Alerts();

    alerts.setId(alertsItem.id);
    alerts.setTitle(alertsItem.title);
    alerts.setDescribe(alertsItem.describe);
    alerts.setPublishedAt(alertsItem.published_at);
    alerts.setCreatedAt(alertsItem.created_at);
    alerts.setUpdatedAt(alertsItem.updated_at);

    return alerts;
  });
}
