import { useEffect, useState } from "react";

export function useCollpaseTimes(timesOperation) {
  const [hasMonday, setHasMonday] = useState(false);
  const [hasTuesday, setHasTuesday] = useState(false);
  const [hasWednesday, setHasWednesday] = useState(false);
  const [hasThursday, setHasThursday] = useState(false);
  const [hasFriday, setHasFriday] = useState(false);
  const [hasSaturday, setHasSaturday] = useState(false);
  const [hasSunday, setHasSunday] = useState(false);

  useEffect(() => {
    setHasMonday(
      !!timesOperation.find((timeline) => timeline.weekday == "Segunda")
    );
    setHasTuesday(
      !!timesOperation.find((timeline) => timeline.weekday == "Terça")
    );
    setHasWednesday(
      !!timesOperation.find((timeline) => timeline.weekday == "Quarta")
    );
    setHasThursday(
      !!timesOperation.find((timeline) => timeline.weekday == "Quinta")
    );
    setHasFriday(
      !!timesOperation.find((timeline) => timeline.weekday == "Sexta")
    );
    setHasSaturday(
      !!timesOperation.find((timeline) => timeline.weekday == "Sabado")
    );
    setHasSunday(
      !!timesOperation.find((timeline) => timeline.weekday == "Domingo")
    );
  }, [timesOperation]);

  return {
    hasMonday,
    hasTuesday,
    hasWednesday,
    hasThursday,
    hasFriday,
    hasSaturday,
    hasSunday,
    setHasTuesday,
    setHasMonday,
    setHasWednesday,
    setHasThursday,
    setHasFriday,
    setHasSaturday,
    setHasSunday,
  };
}
