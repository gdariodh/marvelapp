// Types -> describen los actions de la app
import {MARVEL_GLOBAL, OBJECT_HEROE} from '../../types'

export default function(state,action){
    switch(action.type){
        
       case MARVEL_GLOBAL:
           return {
               ...state,
               heroes: action.payload
           }

           case OBJECT_HEROE:
               return{
                   ...state,
                   heroe_seleccionado: action.payload
               }

        default:
            return state;
    }
}