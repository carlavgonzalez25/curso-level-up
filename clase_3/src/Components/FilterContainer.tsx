import React from "react";
import { InputFilter, SelectFilter } from "../utils/filterFactory";
import { FilterElement } from "../utils/filterSelector";

interface FilterContainerProps {
  handleChange: (name: string, value: string) => void;
}
export const FilterContainer: React.FC<FilterContainerProps> = (
  handleChange
) => {
  /* 
        - Debo renderizar mis filtros. Estos los debo crear de manera dinamica segun el type que le pase como parametro
        - Al hacer click sobre alguno de los filtros, debo cambiar el strategy al tipo seleccionado 
    */

  const statusFilter = new SelectFilter().createFilter("status", [
    "dead",
    "alive",
  ]);
  const genderFilter = new SelectFilter().createFilter("gender", [
    "male",
    "female",
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
