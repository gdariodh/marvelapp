import { LUCHADORES } from "../../types";

export default function (state, action) {
  switch (action.type) {
    case LUCHADORES:
      return {
        ...state,
        luchadores: action.payload,
      };

    default:
      return state;
  }
}
