import React, { useReducer } from "react";
import { peleasContext } from "../index";
import peleasReducer from "../reducers/peleasReducer";
import { LUCHADORES } from "../../types";

export default function PeleasState({ children }) {
  const initialState = {
    luchadores: [],
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

  return (
    <peleasContext.Provider
      value={{
        luchadores: state.luchadores,
        seleccionarDosLuchadores,
      }}>
      {children}
    </peleasContext.Provider>
  );
}
