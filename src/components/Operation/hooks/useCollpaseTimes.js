import { useState } from "react";

export function useCollpaseTimes() {
  const [hasMonday, setHasMonday] = useState(false);
  const [hasTuesday, setHasTuesday] = useState(false);
  const [hasWednesday, setHasWednesday] = useState(false);
  const [hasThursday, setHasThursday] = useState(false);
  const [hasFriday, setHasFriday] = useState(false);
  const [hasSaturday, setHasSaturday] = useState(false);
  const [hasSunday, setHasSunday] = useState(false);
  const [hasDefault, setHasDefault] = useState(false);

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
    hasDefault,
    setHasDefault,
  };
}
