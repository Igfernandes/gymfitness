import { Timeline } from "../../../database/entities/timeline";
import { timelineMapper } from "../../../database/mappers/timelineMapper";
import { BaseModel } from "../../../database/utils/baseModel";

export function GetTimelinesUseCase() {
  this.execute = async () => {
    const model = new BaseModel();
    const timeline = new Timeline();

    const foundTimelines = timelineMapper(await model.findAll(timeline));

    return foundTimelines.map((timeline) => timeline.attributes);
  };
}
