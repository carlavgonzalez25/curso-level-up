import React from "react";

export interface SelectProps {
  options: string[];
  name: string;
}

export const Select: React.FC<SelectProps> = ({ options, name }) => {
  return (
    <select name={`select-${name}`}>
      {options.map((option, index) => {
        return (
          <option key={name + index} value="option">
            {option}
          </option>
        );
      })}
    </select>
  );
};
