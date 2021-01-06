import { LUCHADORES, LUCHADOR_RANKING, RESET_LUCHADORES } from "../../types";

export default function (state, action) {
  switch (action.type) {
    case LUCHADORES:
      // JSON.stringify para guardar un array con por lo menos 2 objetos
      localStorage.setItem(
        "luchadores",
        // spread operator en JSON.stringify para acumular los luchadores en localStorage
        JSON.stringify([action.payload, ...state.luchadoresranking])
      );
      return {
        ...state,
        luchadores: [...state.luchadores, action.payload],
      };

    case LUCHADOR_RANKING:
      localStorage.setItem(
        "ranking",
        // spread operator en JSON.stringify para acumular los luchadores en localStorage
        JSON.stringify([action.payload, ...state.luchadoresranking])
      );
      return {
        ...state,
        luchadoresranking: [action.payload, ...state.luchadoresranking],
      };

    case RESET_LUCHADORES:
      localStorage.removeItem("luchadores");
      return {
        ...state,
        luchadores: [],
      };

    default:
      return state;
  }
}
