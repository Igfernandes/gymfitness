import React, { useState } from "react";

export function useOperation() {
  const [segunda, setSegunda] = useState({
    abertura: "",
    termino: "",
  });
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
          label: String(num < 10 ? `0${num}:00` : `${num}:00`),
          value: String(num < 10 ? `0${num}:00` : `${num}:00`),
        };
      }),
      ...Array.from(Array(24).keys()).map((num) => {
        return {
          label: String(num < 10 ? `0${num}:30` : `${num}:30`),
          value: String(num < 10 ? `0${num}:30` : `${num}:30`),
        };
      }),
    ].sort((a, b) => {
      return a.label.replace(":", "") - b.label.replace(":", "");
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
    setDomingo
  };
}
