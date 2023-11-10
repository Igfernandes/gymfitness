import React, { useEffect, useState } from "react";
import { usePutTimelines } from "../../../services/timelines/put";

export function useOperation(timesOperation) {
  const { mutate: putTimelines, isLoading } = usePutTimelines();

  const [segunda, setSegunda] = useState({
    abertura: "",
    termino: "",
  });

  useEffect(() => {
    const monday = timesOperation.find(
      (timeline) => timeline.weekday == "Segunda"
    );
    setSegunda({
      abertura: monday ? monday.time_opened : "",
      termino: monday ? monday.time_closed : "",
    });

    const tuesday = timesOperation.find(
      (timeline) => timeline.weekday == "Terça"
    );
    setTerca({
      abertura: tuesday ? tuesday.time_opened : "",
      termino: tuesday ? tuesday.time_closed : "",
    });

    const wednesday = timesOperation.find(
      (timeline) => timeline.weekday == "Quarta"
    );
    setQuarta({
      abertura: wednesday ? wednesday.time_opened : "",
      termino: wednesday ? wednesday.time_closed : "",
    });

    const thursday = timesOperation.find(
      (timeline) => timeline.weekday == "Quinta"
    );
    setQuinta({
      abertura: thursday ? thursday.time_opened : "",
      termino: thursday ? thursday.time_closed : "",
    });

    const friday = timesOperation.find(
      (timeline) => timeline.weekday == "Sexta"
    );
    setSexta({
      abertura: friday ? friday.time_opened : "",
      termino: friday ? friday.time_closed : "",
    });

    const saturday = timesOperation.find(
      (timeline) => timeline.weekday == "Sabado"
    );
    setSabado({
      abertura: saturday ? saturday.time_opened : "",
      termino: saturday ? saturday.time_closed : "",
    });

    const sunday = timesOperation.find(
      (timeline) => timeline.weekday == "Domingo"
    );
    setDomingo({
      abertura: sunday ? sunday.time_opened : "",
      termino: sunday ? sunday.time_closed : "",
    });
  }, [timesOperation]);

  const [terca, setTerca] = useState({
    abertura: "",
    termino: "",
  });
  const [quarta, setQuarta] = useState({
    abertura: "",
    termino: "",
  });
  const [quinta, setQuinta] = useState({
    abertura: "",
    termino: "",
  });
  const [sexta, setSexta] = useState({
    abertura: "",
    termino: "",
  });
  const [sabado, setSabado] = useState({
    abertura: "",
    termino: "",
  });
  const [domingo, setDomingo] = useState({
    abertura: "",
    termino: "",
  });

  const timeToClockSelect = () => {
    return [
      ...Array.from(Array(24).keys()).map((num) => {
        return {
          label: String(num < 10 ? `0${num}:00:00` : `${num}:00:00`),
          value: String(num < 10 ? `0${num}:00:00` : `${num}:00:00`),
        };
      }),
      ...Array.from(Array(24).keys()).map((num) => {
        return {
          label: String(num < 10 ? `0${num}:30:00` : `${num}:30:00`),
          value: String(num < 10 ? `0${num}:30:00` : `${num}:30:00`),
        };
      }),
    ].sort((a, b) => {
      const leftTime = a.label.split(":");
      const rightTime = b.label.split(":");

      return `${leftTime[0]}${leftTime[1]}` - `${rightTime[0]}${rightTime[1]}`;
    });
  };

  const handleSubmitOperations = () => {
    putTimelines({
      Segunda: segunda,
      Terça: terca,
      Quarta: quarta,
      Quinta: quinta,
      Sexta: sexta,
      Sabado: sabado,
      Domingo: domingo,
    });
  };

  return {
    timeToClockSelect,
    segunda,
    setSegunda,
    terca,
    setTerca,
    quarta,
    setQuarta,
    quinta,
    setQuinta,
    sexta,
    setSexta,
    sabado,
    setSabado,
    domingo,
    setDomingo,
    handleSubmitOperations,
    isLoading,
  };
}
