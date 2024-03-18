// ESLint -> los tipos se importan como types
import type { CharacterProps, Gender, Status } from "../types/Character";

export interface Filter {
  filter(characters: CharacterProps[]): CharacterProps[];
}

export class GenderFilter implements Filter {
  constructor(public gender: Gender) {} // instancia rapida
  filter(characters: CharacterProps[]): CharacterProps[] {
    return characters.filter((character) => character.gender === this.gender);
  }
}

export class StatusFilter implements Filter {
  constructor(public status: Status) {} // instancia rapida
  filter(characters: CharacterProps[]): CharacterProps[] {
    return characters.filter((character) => character.status === this.status);
  }
}
