import React, { useState } from "react";
import { styleLayout } from "../style";

export function useFormChecked() {
  const [checkedStyle, setCheckedStyle] = useState(styleLayout.checked);

  return { checkedStyle };
}
