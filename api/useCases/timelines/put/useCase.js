import { Alerts } from "../../../database/entities/alerts";
import { Timeline } from "../../../database/entities/timeline";
import { BaseModel } from "../../../database/utils/baseModel";

export function PutTimelinesUseCase() {
  this.execute = async (payload) => {
    const model = new BaseModel();
    const timelineEntity = new Timeline();
    const alerts = new Alerts();

    console.log("PASS 1")
    await model.delete(timelineEntity, {
      1: "1",
    });

    console.log("PASS 2")
    for await (const [label, timeLine] of Object.entries(payload)) {
      const timelineData = new Timeline();

      if (!timeLine.abertura || !timeLine.termino) continue;

      timelineData.setWeekday(label);
      timelineData.setTimeOpened(timeLine.abertura);
      timelineData.setTimeClosed(timeLine.termino);
      console.log("AFTER INSERT")
      await model.insert(timelineData);
      console.log("BEFORE INSERT")
    }
    console.log("PASS 3")
    alerts.setTitle("Atualização no cronograma");
    alerts.setDescribe("Novo cronograma da academia adicionado!");

    await model.insert(alerts);
    console.log("PASS 4")
    return {
      success: "Inseridos com sucesso!",
    };
  };
}
