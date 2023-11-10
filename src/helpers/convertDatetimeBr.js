import { formatTime } from "./formatTime";

export function convertDatetimeBr(age) {
  const dateValues = age.split("T");

  const date = dateValues[0].split("-");
  const times = dateValues[1].split(".")[0].split("T");

  return `${formatTime(date[2])}/${formatTime(date[1])}/${date[0]} ${times[0]}`;
}
