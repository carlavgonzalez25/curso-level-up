import * as React from "react";
import { type CharacterProps } from "../../types/Character";

const Character: React.FC<CharacterProps> = ({
  id,
  name,
  status,
  species,
  gender,
  image,
}) => {
  return (
    <>
      <img style={{ width: 100, borderRadius: "50%" }} src={image} />
      <h4>
        {id} - {name} - {gender} - {species} - {status}
      </h4>
    </>
  );
};

export default Character;
