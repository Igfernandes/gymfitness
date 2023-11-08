import { useState } from "react";

export function useButton({ style = {}, hoverStyle = {} }) {
  const [styleCurrent, setStyleCurrent] = useState(style);

  const handleHover = () => {
    if (Object.keys(hoverStyle).length > 0) setStyleCurrent(hoverStyle);
    else setStyleCurrent(style);

    if (styleCurrent == hoverStyle) return;

    setTimeout(() => {
      setStyleCurrent(styleCurrent);
    }, 200);
  };

  return {
    handleHover,
    styleCurrent,
  };
}
