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
      (dataDay) => dataDay.weekDay == day
    );

    if (!dateFiltered) return "Fechado";

    const { hours } = dateFiltered;

    if (!hours || !hours.opened || !hours.closed) return `Horário indisponível`;

    const openedHour = new Date(`${dateCurrent}T${hours.opened}.000Z`);
    const closedHour = new Date(`${dateCurrent}T${hours.closed}.000Z`);

    return `${formatTime(openedHour.getUTCHours())}:${formatTime(
      openedHour.getUTCMinutes()
    )} até ${formatTime(closedHour.getUTCHours())}:${formatTime(
      closedHour.getUTCMinutes()
    )}`;
  };

  const getStatus = (day) => {
    const weekDayCurrent = weekDays[date.getDay()];
    const dateFiltered = timesOperation.find(
      (dataDay) => dataDay.weekDay == weekDayCurrent && day == weekDayCurrent
    );

    if (!dateFiltered && !weekDayCurrent) return "Fechado";
    else if (!dateFiltered && weekDayCurrent) return "Aberto";

    const { hours } = dateFiltered;

    if (!hours || !hours.opened || !hours.closed) return `Fechado`;

    const openedHour = new Date(`${dateCurrent}T${hours.opened}.000Z`);
    const closedHour = new Date(`${dateCurrent}T${hours.closed}.000Z`);

    if (
      day == weekDayCurrent &&
      (date.getTime() < openedHour.getTime() ||
        date.getTime() > closedHour.getTime())
    )
      return `Fechado`;

    return "Aberto";
  };

  const isStatusCurrent = (day) => {
    const weekDayCurrent = weekDays[date.getDay()];
    const dateFiltered = timesOperation.find(
      (dataDay) => dataDay.weekDay == weekDayCurrent && day == weekDayCurrent
    );

    if (!dateFiltered) return false;

    return true;
  };

  return {
    weekDays,
    getStatus,
    getHours,
    isStatusCurrent,
  };
}
