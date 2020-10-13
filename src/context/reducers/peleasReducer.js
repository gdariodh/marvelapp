import { LUCHADORES, LUCHADOR_RANKING } from "../../types";

export default function (state, action) {
  switch (action.type) {
    case LUCHADORES:
      return {
        ...state,
        luchadores: action.payload,
      };

    case LUCHADOR_RANKING:
      return {
        ...state,
        luchadoresranking: [action.payload, ...state.luchadoresranking],
      };


    default:
      return state;
  }
}
