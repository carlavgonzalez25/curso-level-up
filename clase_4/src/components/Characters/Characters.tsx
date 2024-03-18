import * as React from "react";
import { getResource } from "../../utils/getResource";
import type { FetchedCharacterProps } from "../../types/Character";
import { AxiosError } from "axios";
import Character from "../Character/Character";
import { useFilterCharacters } from "../../hooks/useFilterCharacters";
import FilterComponent from "../Filters/Filters";
import { reducer, setCharacters } from "./reducer";

export const Characters = () => {
  const [{ characters }, dispatch] = React.useReducer(reducer, {
    characters: [],
  });
  // const [characters, setCharacters] = React.useState<CharacterProps[]>([]);
  const { filteredCharacters, changeFilterStrategy } = useFilterCharacters();

  // custom hook para useCharacters()
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getResource<FetchedCharacterProps>("/character");
        const { results } = data as FetchedCharacterProps;
        dispatch(setCharacters(results));
        // setCharacters(results);
      } catch (e) {
        // Agregar a la tarea el manejo de errores en la vista
        if (e instanceof AxiosError) {
          if (e.code === "500") {
            //
          }
        }
        /*
        
         */
        // e instance of ...
        // discriminar el tipo de error -> fallback
        // enviar una métrica de error a sentry
        console.error(`Error fetching data`, e);
        throw new Error(`${e}`);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <FilterComponent changeFilterStrategy={changeFilterStrategy} />

      <div style={{ marginTop: "32px" }}>
        {filteredCharacters(characters).map((character) => (
          <Character key={character.id} {...character} />
        ))}
      </div>
    </>
  );
};

export default Characters;
