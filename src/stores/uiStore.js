import { observable, action, computed } from 'mobx';

export class UiStore {
  @observable alerts = [{
    id: 1,
    type: "info",
    message: "Hello, world"
  }, {
    id: 2,
    type: "success",
    message: "Oh, hai"
  }];

  @computed get allAlerts() {
    return this.alerts;
  }

  @action
  pushAlert = (alert) => {
    this.alerts.push(alert);
  };
}

export default new UiStore;
