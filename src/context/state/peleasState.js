import React,{useReducer} from 'react'
import {peleasContext} from '../index'
import peleasReducer from '../reducers/peleasReducer'

export default function PeleasState({children}) {
    
    const initialState = {
        msg:'hola'
    }

    const [state, dispatch] = useReducer(peleasReducer, initialState);

  return(
      <peleasContext.Provider
       value={{
           mensaje: state.msg
       }}
      >
          {children}
      </peleasContext.Provider>
  )
}
