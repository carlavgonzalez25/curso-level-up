import { useEffect, useState } from "react";
import "./App.scss";
import { CharactersComponent } from "./components/Characters";
import { ApiResponse } from "./types/types";
import { Character } from "./types/types";
import { FilterContainer } from "./components/FilterContainer";
import { useFilterCharacters } from "./hooks/hooks";
import { GenderFilter, NameFilter, StatusFilter } from "./utils/filterStrategy";

const App: React.FC = () => {
  const [data, setData] = useState<Character[]>();

  async function getCharacters<T>(): Promise<T> {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json() as Promise<T>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCharacters<ApiResponse>();
        const data = await response.results;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function handleFilter(type: string, value: string) {
    const { filteredCharacters, changeFilterStrategy } = useFilterCharacters();

    console.log("llega aca handle Filter de APP");

    switch (type) {
      case "gender":
        changeFilterStrategy(new GenderFilter(value));
        setData(filteredCharacters(data));
        break;
      case "status":
        changeFilterStrategy(new StatusFilter(value));
        setData(filteredCharacters(data));
        break;
      case "name-search":
        changeFilterStrategy(new NameFilter(value));
        setData(filteredCharacters(data));
    }
  }

  return data === undefined ? (
    <p>Cargando...</p>
  ) : (
    <div className="container">
      <h1> Clase 3 - filtrado de personajes</h1>
      <FilterContainer handleChange={handleFilter} />
      <CharactersComponent characters={data} />
    </div>
  );
};

export default App;
