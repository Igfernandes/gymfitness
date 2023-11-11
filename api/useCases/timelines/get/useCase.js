import { Timeline } from "../../../database/entities/timeline";
import { timelineMapper } from "../../../database/mappers/timelineMapper";
import { BaseModel } from "../../../database/utils/baseModel";

export function GetTimelinesUseCase() {
  this.execute = async () => {
    const model = new BaseModel();
    const timeline = new Timeline();

    const data = await model.findAll(timeline);
    const foundTimelines = await timelineMapper(data);

    return foundTimelines.map((timeline) => timeline.attributes);
  };
}
