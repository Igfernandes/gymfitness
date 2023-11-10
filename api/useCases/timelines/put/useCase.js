import { Alerts } from "../../../database/entities/alerts";
import { Timeline } from "../../../database/entities/timeline";
import { BaseModel } from "../../../database/utils/baseModel";

export function PutTimelinesUseCase() {
  this.execute = async (payload) => {
    const model = new BaseModel();
    const timelineEntity = new Timeline();
    const alerts = new Alerts();

    await model.delete(timelineEntity, {
      1: "1",
    });

    await Object.entries(payload).map(async ([label, timeLine]) => {
      const timelineData = new Timeline();

      if (!timeLine.abertura || !timeLine.termino) return;

      timelineData.setWeekday(label);
      timelineData.setTimeOpened(timeLine.abertura);
      timelineData.setTimeClosed(timeLine.termino);

      return model.insert(timelineData);
    });

    alerts.setTitle("Atualização no cronograma");
    alerts.setDescribe("Novo cronograma da academia adicionado!");

    await model.insert(alerts);

    return {
      success: "Inseridos com sucesso!",
    };
  };
}
