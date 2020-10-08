import React,{useEffect, useReducer} from 'react';
import {marvelContext} from "../index"
import marvelReducer from "../reducers/marvelReducer"
// types -> describen la app 
import {MARVEL_GLOBAL} from '../../types'
// axios configurado
import clienteAxios from '../../config/axios'

export default function MarvelState({children}) {
   // state central -> se altera con el reducer
   const initialState = {
       heroes: null
   }
 
   // Para hacer la peticion, y tener la data disponible en toda la app
   useEffect(() => {
    const req = async () => {
        const key = `f2b9a3277c025b953471c3448f8c8905`;
        const {data:{data:{results}}} = await clienteAxios(`/characters?apikey=${key}`);
        // destructuring
        // console.log(results)
        // dispatch se encarga del envio al reducer, para modificar el state central
        dispatch({
            type:MARVEL_GLOBAL,
            payload: results
        });
        // modificamos state.heroes
    }
    req();
   },[]);

   

   // conexion state central con reducer 
   const [state, dispatch] = useReducer(marvelReducer, initialState);
   // algunas fns globales
 
   // Datos o fns que estaran disponibles en todos los childrens
    return (
        <marvelContext.Provider
         value={{
            heroes: state.heroes
         }}
        >
            {children}
         </marvelContext.Provider>
    )
}

// Los children consumen con el useContext() 
// Children: ListadoHeroes
