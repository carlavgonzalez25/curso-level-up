import { Select } from "../components/Select";
import { Input } from "../components/Input";
import React from "react";

interface FilterElementProps {
  type: string;
  options: string[];
  name: string;
  handleChange: (name: string, value: string) => void;
}

export const FilterElement: React.FC<FilterElementProps> = ({
  type,
  ...rest
}) => {
  const filterMap = {
    select: Select,
    input: Input,
  };

  const FilterComponent = filterMap[
    type as keyof typeof filterMap
  ] as React.FC<FilterElementProps>;

  return FilterComponent ? <FilterComponent type={type} {...rest} /> : null;
};
