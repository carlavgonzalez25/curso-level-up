import * as React from "react";
// Chip
import type { Filter } from "../../utils/filterCharactersStrategy";
import { filter } from "../../utils/filters";
import Chip from "../Chip/Chip";

interface FilterComponentProps {
  changeFilterStrategy: (strategy: Filter) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  changeFilterStrategy,
}) => {
  return (
    <>
      {filter.map((filter, idx) => (
        <span key={idx} style={{ marginRight: "6px" }}>
          <Chip onClick={() => changeFilterStrategy(filter.strategy)}>
            {filter.name}
          </Chip>
        </span>
      ))}
    </>
  );
};

export default FilterComponent;
