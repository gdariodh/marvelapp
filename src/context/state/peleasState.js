import React, { useReducer } from "react";
import { peleasContext } from "../index";
import peleasReducer from "../reducers/peleasReducer";
import { LUCHADORES, LUCHADOR_RANKING } from "../../types";

export default function PeleasState({ children }) {
  const initialState = {
    luchadores: [],
    luchadoresranking: [],
  };

  const [state, dispatch] = useReducer(peleasReducer, initialState);
  // fn que selecciona a dos luchadores y los agrega al state de luchadores
  const seleccionarDosLuchadores = (luchadores_acumulados) => {
    if (luchadores_acumulados.length === 2) {
      dispatch({
        type: LUCHADORES,
        payload: luchadores_acumulados,
      });
    }
  };

  // fn que agrega un ganador al ranking
  const agregaLuchadorRanking = (heroe_ganador) => {
    dispatch({
      type: LUCHADOR_RANKING,
      payload: heroe_ganador,
    });
  };

  return (
    <peleasContext.Provider
      value={{
        luchadores: state.luchadores,
        luchadoresranking: state.luchadoresranking,
        nro_peleas: state.nro_peleas,
        seleccionarDosLuchadores,
        agregaLuchadorRanking,
      }}>
      {children}
    </peleasContext.Provider>
  );
}
