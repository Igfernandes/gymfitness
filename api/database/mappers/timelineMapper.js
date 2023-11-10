import { Timeline } from "../entities/timeline";

export function timelineMapper(timelineData = []) {
  return timelineData.map((timelineItem) => {
    const timeline = new Timeline();

    timeline.setId(timelineItem.id);
    timeline.setWeekday(timelineItem.weekday);
    timeline.setTimeOpened(timelineItem.time_opened);
    timeline.setTimeClosed(timelineItem.time_closed);
    timeline.setCreatedAt(timelineItem.created_at);
    timeline.setUpdatedAt(timelineItem.updated_at);

    return timeline;
  });
}
