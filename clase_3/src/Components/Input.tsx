import React, { useState } from "react";

export interface InputProps {
  name: string;
  handleChange: (name: string, value: string) => void;
}

export const Input: React.FC<InputProps> = ({ name, handleChange }) => {
  const [value, setValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleChange(name, e.target.value);
  };

  return (
    <>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e)}
        placeholder="Search here"
      />
    </>
  );
};
