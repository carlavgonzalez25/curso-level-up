import React, { useState } from "react";

export interface InputProps {
  name: string;
  handleChange: (name: string, value: string) => void;
}

export const Input: React.FC<InputProps> = ({ name, handleChange }) => {
  const [value, setValue] = useState<string>("");

  console.log("handleChange dentro de input ", handleChange);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Llego hasta el input change? ");
    setValue(e.target.value);
    handleChange(name, e.target.value);
  };

  return (
    <>
      <label htmlFor={name}></label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
    </>
  );
};
