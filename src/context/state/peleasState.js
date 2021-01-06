import React, { useReducer } from "react";
import { peleasContext } from "../index";
import peleasReducer from "../reducers/peleasReducer";
import { LUCHADORES, LUCHADOR_RANKING, RESET_LUCHADORES } from "../../types";

export default function PeleasState({ children }) {
  const initialState = {
    // forma de obtener el array del localStorage
    luchadores: JSON.parse(localStorage.getItem("luchadores"))
      ? JSON.parse(localStorage.getItem("luchadores"))
      : [],
    luchadoresranking: JSON.parse(localStorage.getItem("ranking"))
      ? JSON.parse(localStorage.getItem("ranking"))
      : [],
  };

  const [state, dispatch] = useReducer(peleasReducer, initialState);

  // selecciona a dos luchadores y los agrega al state de luchadores son maximo 2
  const seleccionarDosLuchadores = (luchadores) => {
    // limita a solo 2 luchadores -> accede al state como state.luchadores
    if (state.luchadores.length <= 1) {
      dispatch({
        type: LUCHADORES,
        payload: luchadores,
      });
    }
  };

  // resetea el array de luchadores
  const resetLuchadores = () => dispatch({ type: RESET_LUCHADORES });

  // agrega un nuevo ganador al array de luchadoresranking
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
        resetLuchadores,
      }}
    >
      {children}
    </peleasContext.Provider>
  );
}
