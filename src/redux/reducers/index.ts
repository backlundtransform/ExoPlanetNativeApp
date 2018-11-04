import { combineReducers } from 'redux';
import {AppNavigator} from '../../navigation/AppNavigator'
import { PLANETS_AVAILABLE } from "../actions/" 

let planetState = { planets: [], loading:true };

let searchState ={ filter: {mass:"",comp:"",atmos:"",disc:"",temp:"",lightyears:"",sort:"", order:true }};

const planetReducer = (state = planetState , action) => {

   
         if(action.type !==PLANETS_AVAILABLE){

            return state;
         }
            state = Object.assign({}, state, { planets: action.planets, loading:false });
            
            return state; 
};


const searchReducer = (state = searchState , action) => {
  
    if(action.type ===PLANETS_AVAILABLE){

        return state;
     }

    state = Object.assign({}, state,{filter:action.filter });

  return state;     
   
};
const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state)
    return newState || state
  }
const rootReducer = combineReducers({
    planetReducer,
    navReducer,
    searchReducer
})
 
export default rootReducer;