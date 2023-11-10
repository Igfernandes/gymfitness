import { useState } from "react";
import { formatTime } from "../../../../../helpers/formatTime";

export function useTimesOperation(timesOperation) {
  const date = new Date();
  const dateCurrent = `${formatTime(date.getFullYear())}-${formatTime(
    date.getMonth()
  )}-${formatTime(date.getDay())}`;
  const [weekDays, setWeekDays] = useState([
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ]);

  const getHours = (day) => {
    const dateFiltered = timesOperation.find(
      (dataDay) => dataDay.weekday == day
    );

    if (!dateFiltered) return "Fechado";

    const { time_opened, time_closed } = dateFiltered;

    if (!time_opened || !time_closed) return `Horário indisponível`;

    const openedHour = new Date(`${dateCurrent}T${time_opened}.000Z`);
    const closedHour = new Date(`${dateCurrent}T${time_closed}.000Z`);

    return `${formatTime(openedHour.getUTCHours())}:${formatTime(
      openedHour.getUTCMinutes()
    )} até ${formatTime(closedHour.getUTCHours())}:${formatTime(
      closedHour.getUTCMinutes()
    )}`;
  };

  const getStatus = (day) => {
    const weekDayCurrent = weekDays[date.getDay()];
    const dateFiltered = timesOperation.find(
      (dataDay) => dataDay.weekday == weekDayCurrent && day == weekDayCurrent
    );

    if (!dateFiltered && !weekDayCurrent) return "Fechado";
    else if (!dateFiltered && day == weekDayCurrent) return "Fechado";
    else if (!dateFiltered && weekDayCurrent) return "Aberto";

    const { time_opened, time_closed } = dateFiltered;

    if (!time_opened || !time_closed) return `Fechado`;

    const hourCurrent = `${formatTime(date.getHours())}${formatTime(
      date.getMinutes()
    )}${formatTime(date.getSeconds())}`;
    const openedHour = time_opened.split(":").join("");
    const closedHour = time_closed.split(":").join("");

    if (
      day == weekDayCurrent &&
      (hourCurrent < openedHour || hourCurrent > closedHour)
    )
      return `Fechado`;

    return "Aberto";
  };

  const isStatusCurrent = (day) => {
    return day == weekDays[date.getDay()];
  };

  return {
    weekDays,
    getStatus,
    getHours,
    isStatusCurrent,
    setWeekDays,
  };
}
