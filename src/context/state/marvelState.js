import React, { useEffect, useReducer } from "react";
import { marvelContext } from "../index";
import marvelReducer from "../reducers/marvelReducer";
import { MARVEL_GLOBAL, OBJECT_HEROE } from "../../types"; // types -> describen la app
import clienteAxios from "../../config/axios"; // axios configurado

export default function MarvelState({ children }) {
  // state central -> se altera con el reducer
  const initialState = {
    heroes: null,
    heroe_seleccionado: JSON.parse(localStorage.getItem("heroe")),
  };

    // conexion entre state,actions & reducer
    const [state, dispatch] = useReducer(marvelReducer, initialState);
   
    // hace llamado api & el array de heroes lo encapsula en state.heroes
  useEffect(() => {
    const req = async () => {
      const key = process.env.REACT_APP_KEY;
      const hash = process.env.REACT_APP_HASH;
      const {
        data: {
          data: { results },
        },
      } = await clienteAxios(`/characters?ts=1&apikey=${key}&hash=${hash}`);
      dispatch({
        type: MARVEL_GLOBAL,
        payload: results,
      });
    };
    req();
  }, []);

  // trae el objecto de un heroe
  const dataHeroeById = (heroe) => {
    dispatch({
      type: OBJECT_HEROE,
      payload: heroe,
    });
  };

  // Datos o fns que estaran disponibles en todos los childrens
  return (
    <marvelContext.Provider
      value={{
        heroes: state.heroes,
        heroe_seleccionado: state.heroe_seleccionado,
        dataHeroeById: dataHeroeById,
      }}
    >
      {children}
    </marvelContext.Provider>
  );
}
