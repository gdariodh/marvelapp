// Types -> describen los actions de la app
import {MARVEL_GLOBAL} from '../../types'

export default function(state,action){
    switch(action.type){
        
       case MARVEL_GLOBAL:
           return {
               ...state,
               heroes: action.payload
           }

        default:
            return state;
    }
}