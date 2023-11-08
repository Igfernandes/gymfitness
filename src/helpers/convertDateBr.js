import { formatTime } from "./formatTime";

export function convertDateBr(age) {
  const times = age.split("-");
  return `${formatTime(times[2])}/${formatTime(times[1])}/${times[0]}`;
}
