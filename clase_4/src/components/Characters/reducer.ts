import { CharacterProps } from "../../types/Character";

enum ActionType {
  SET_CHARACTERS = "SET_CHARACTERS",
}

export interface State {
  characters: CharacterProps[];
}

export interface Action {
  type: ActionType;
  payload: unknown; // se puede usar un generic? Ampliar
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload as CharacterProps[],
      };

    default:
      return state;
  }
};

// Ducks

export const setCharacters = (characters: CharacterProps[]): Action => {
  return {
    type: ActionType.SET_CHARACTERS,
    payload: characters,
  };
};
