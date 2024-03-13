import { useState } from "react";
import { Character, Filter } from "../types/types";
import { NameFilter } from "../utils/filterStrategy";

export const useFilterCharacters = () => {
  const [filterStrategy, setFilterStrategy] = useState<Filter>(
    new NameFilter("")
  );

  const filteredCharacters = (characters: Character[] | undefined) => {
    return characters !== undefined ? filterStrategy.filter(characters) : [];
  };

  const changeFilterStrategy = (strategy: Filter) => {
    setFilterStrategy(strategy);
  };

  return { filteredCharacters, changeFilterStrategy };
};
