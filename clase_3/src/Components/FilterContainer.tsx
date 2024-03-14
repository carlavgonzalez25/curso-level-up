import React from "react";
import { InputFilter, SelectFilter } from "../utils/filterFactory";
import { FilterElement } from "../utils/filterSelector";
import "./filterContainer.scss";

interface FilterContainerProps {
  handleChange: (name: string, value: string) => void;
}
export const FilterContainer: React.FC<FilterContainerProps> = ({
  handleChange,
}) => {
  const statusFilter = new SelectFilter().createFilter("status", [
    "dead",
    "alive",
    "unknown",
  ]);
  const genderFilter = new SelectFilter().createFilter("gender", [
    "male",
    "female",
    "unknown",
  ]);
  const inputFilter = new InputFilter().createFilter("name-search", [""]);

  return (
    <div className="filter-container">
      <FilterElement
        type={statusFilter.type}
        options={statusFilter.options}
        name={statusFilter.name}
        handleChange={handleChange}
      />
      <FilterElement
        type={genderFilter.type}
        options={genderFilter.options}
        name={genderFilter.name}
        handleChange={handleChange}
      />
      <FilterElement
        type={inputFilter.type}
        name={inputFilter.name}
        options={inputFilter.options}
        handleChange={handleChange}
      />
    </div>
  );
};
