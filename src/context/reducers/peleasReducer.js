import { LUCHADORES, LUCHADOR_RANKING, RESET_LUCHADORES } from "../../types";

export default function (state, action) {


  switch (action.type) {
    case LUCHADORES:
      // JSON.stringify para guardar un array con por lo menos 2 objetos
      localStorage.setItem("luchadores",JSON.stringify(action.payload))
      return {
        ...state,
        luchadores: [...state.luchadores,action.payload],
      };

    case LUCHADOR_RANKING:
      // JSON.stringify para guardar un array con uno o mas objetos
      localStorage.setItem("ranking",JSON.stringify([action.payload,...state.luchadoresranking]))
      return {
        ...state,
        luchadoresranking: [action.payload, ...state.luchadoresranking],
      };

    case RESET_LUCHADORES:
      return{
        ...state,
        luchadores: []
      }   


    default:
      return state;
  }
}
