import { Timeline } from "../../../database/entities/timeline";
import { BaseModel } from "../../../database/utils/baseModel";

export function PutTimelinesUseCase() {
  this.execute = async (payload) => {
    const model = new BaseModel();
    const timelineEntity = new Timeline();

    Object.entries(payload).map(async ([label, timeLine]) => {
      const foundTimeline = await model.findFirst(timelineEntity, {
        weekday: label,
      });

      const timelineData = new Timeline();

      timelineData.setWeekday(label);
      timelineData.setTimeOpened(timeLine.abertura);
      timelineData.setTimeClosed(timeLine.termino);

      if (!foundTimeline) {
        model.insert(timelineData);
      } else {
        model.update(timelineData, {
          id: timelineData.getId(),
        });
      }
    });

    return {
      succces: "Inseridos com sucesso!",
    };
  };
}
