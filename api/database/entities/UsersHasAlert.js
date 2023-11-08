export function UsersHasAlert() {
  this.table = "users_has_alert";
  this.attributes = {
    user_id: null,
    users: null,
    alert_id: null,
    alerts: null,
  };

  this.getUserId = () => {
    return this.attributes.user_id;
  };

  this.setUserId = (userId) => {
    if (typeof userId != "bigint")
      throw new Error("O user_id inserido não é um numero inteiro");

    this.attributes.user_id = userId;
  };

  this.getUsers = () => {
    return this.attributes.users;
  };

  this.setUsers = (users) => {
    this.attributes.users = users;
  };

  this.getAlertId = () => {
    return this.attributes.alertId;
  };

  this.setAlertId = (alertId) => {
    this.attributes.alert_id = alertId;
  };

  this.getAlert = () => {
    return this.attributes.alerts;
  };

  this.setAlert = (alerts) => {
    this.attributes.alerts = alerts;
  };
}
