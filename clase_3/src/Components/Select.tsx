import React, { useState } from "react";

export interface SelectProps {
  options: string[];
  name: string;
  handleChange: (name: string, value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  name,
  handleChange,
}) => {
  const [value, setValue] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    handleChange(name, e.target.value);
  };
  return (
    <select
      name={`select-${name}`}
      value={value}
      onChange={(e) => handleSelectChange(e)}
    >
      <option key="all" value="">
        All
      </option>
      {options.map((option, index) => {
        return (
          <option key={name + index} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};
