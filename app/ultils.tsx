"use client"

import { useState } from "react";

export const useUtilities = () => {
    const [res, setRes] = useState(false);
    const [checked, setChecked] = useState<string | null>(null);
  
    const handleCheckBox = (value: string) => {
      setChecked(value);
    };
  
    const option1 = "a";
    const option2 = "b";
    const option3 = "c";
    const option4 = "d";
  
    return { res, checked, handleCheckBox, option1, option2, option3, option4 };
  };
  