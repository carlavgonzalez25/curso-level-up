import { useEffect, useState } from "react";
import "./App.scss";
import { CharactersComponent } from "./Components/Characters";
import { ApiResponse } from "./types/types";
import { Character } from "./types/types";

const App: React.FC = () => {
  const [data, setData] = useState<Character[]>();

  async function getCharacters<T>(): Promise<T> {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    return response.json() as Promise<T>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (await getCharacters()) as ApiResponse;
        const data = await response.results;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return data === undefined ? (
    <p>Cargando...</p>
  ) : (
    <div className="container">
      <h1> Clase 3 - filtrado de personajes</h1>
      <CharactersComponent characters={data} />
    </div>
  );
};

export default App;
