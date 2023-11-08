import { formatTime } from "./formatTime";

export function convertDateBrToDefault(age) {
  const times = age.split("/");
  return `${formatTime(times[0])}-${formatTime(times[1])}-${times[2]}`;
}
