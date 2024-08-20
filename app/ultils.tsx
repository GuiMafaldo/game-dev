"use client"

import { useState } from "react";

export const useUtilities = () => {
    const [res, setRes] = useState(false);
    const [checked, setChecked] = useState<string | null>(null);
  
    const handleCheckBox = (value: string) => {
      setChecked(value);
    };
  const options = [
    {value: 'a', label: 'option 1'},
    {value: 'b', label: 'option 2'},
    {value: 'c', label: 'option 3'},
    {value: 'd', label: 'option 4'}
  ]
  
    return { res, checked, handleCheckBox, options};
  };
  