export function formatTime(time) {
  return String(time).length == 1 ? `0${time}` : time;
}
