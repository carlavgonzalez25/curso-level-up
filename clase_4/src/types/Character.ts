export type Status = "Alive" | "unknown" | "Dead";
export type Species = "Human" | "Alian";
export type Gender = "Male" | "Female" | "unknown";

export interface CharacterProps {
  id: number;
  name: string;
  status: Status;
  species: Species;
  gender: Gender;
  image: string;
}

export interface InfoProps {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

// axios ->  data : {}
export interface FetchedCharacterProps {
  info: InfoProps;
  results: CharacterProps[];
}
