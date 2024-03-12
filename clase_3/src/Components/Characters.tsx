import { Character } from "../types/types";
import "./Characters.scss";

interface CharacterProps {
  characters: Character[];
}

export const CharactersComponent: React.FC<CharacterProps> = ({
  characters,
}) => {
  return (
    <div className="characters-container">
      {characters.map((character: Character) => {
        return (
          <div className="item">
            <img src={character.image} />
            <p>{character.name}</p>
            <p>{character.gender}</p>
            <p>{character.status}</p>
            <p>{character.type}</p>
          </div>
        );
      })}
    </div>
  );
};
