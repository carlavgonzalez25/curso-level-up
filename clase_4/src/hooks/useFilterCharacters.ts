import * as React from "react";

import type { Filter } from "../utils/filterCharactersStrategy";
import type { CharacterProps } from "../types/Character";

interface UseFilterCharacters {
  filteredCharacters: (characters: CharacterProps[]) => CharacterProps[];
  changeFilterStrategy: (strategy: Filter) => void;
}

export const useFilterCharacters = (): UseFilterCharacters => {
  const [filterStrategy, setFilterStrategy] = React.useState<Filter | null>(
    null
  );

  const filteredCharacters = (
    characters: CharacterProps[]
  ): CharacterProps[] => {
    return filterStrategy ? filterStrategy.filter(characters) : characters;
  };

  const changeFilterStrategy = (strategy: Filter) => {
    setFilterStrategy(strategy);
  };

  return {
    filteredCharacters,
    changeFilterStrategy,
  };
};
