import { useEffect, useState } from "react";
import "./App.scss";
import { CharactersComponent } from "./components/Characters";
import { ApiResponse } from "./types/types";
import { Character } from "./types/types";
import { FilterContainer } from "./components/FilterContainer";
import { useFilterCharacters } from "./hooks/hooks";
import { GenderFilter, NameFilter, StatusFilter } from "./utils/filterStrategy";

const App: React.FC = () => {
  const [originalData, setOriginalData] = useState<Character[]>([]);

  async function getCharacters<T>(): Promise<T> {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json() as Promise<T>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCharacters<ApiResponse>();
        const data = await response.results;
        setOriginalData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const { filteredCharacters, changeFilterStrategy } = useFilterCharacters();

  const handleFilter = (type: string, value: string) => {
    switch (type) {
      case "gender":
        changeFilterStrategy(new GenderFilter(value));
        break;
      case "status":
        changeFilterStrategy(new StatusFilter(value));
        break;
      case "name-search":
        changeFilterStrategy(new NameFilter(value));
    }
  };

  return filteredCharacters(originalData) === undefined ? (
    <p>Cargando...</p>
  ) : (
    <div className="container">
      <h1> Clase 3 - filtrado de personajes</h1>
      <FilterContainer handleChange={handleFilter} />
      <CharactersComponent characters={filteredCharacters(originalData)} />
    </div>
  );
};

export default App;
