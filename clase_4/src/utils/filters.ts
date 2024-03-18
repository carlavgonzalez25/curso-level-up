import {
  type Filter,
  GenderFilter,
  StatusFilter,
} from "./filterCharactersStrategy";

interface FilterProps {
  name: string;
  strategy: Filter;
}

export const filter: FilterProps[] = [
  { name: "Male", strategy: new GenderFilter("Male") },
  { name: "Female", strategy: new GenderFilter("Female") },
  { name: "Alive", strategy: new StatusFilter("Alive") },
  { name: "Dead", strategy: new StatusFilter("Dead") },
];
