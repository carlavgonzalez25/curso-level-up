import { Character, Filter } from "../types/types";

//Patron strategy

export class GenderFilter implements Filter {
  constructor(public gender: string) {}

  filter(characters: Character[]) {
    return characters.filter((character) => character.gender === this.gender);
  }
}

export class StatusFilter implements Filter {
  constructor(public status: string) {}

  filter(characters: Character[]) {
    return characters.filter((character) => character.status === this.status);
  }
}

export class NameFilter implements Filter {
  constructor(public name: string) {}

  filter(characters: Character[]) {
    return characters.filter((character) => character.name.includes(this.name));
  }
}
