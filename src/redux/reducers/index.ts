import { combineReducers } from 'redux';
import {AppNavigator} from '../../navigation/AppNavigator'
import { PLANETS_AVAILABLE,SEARCH_FILTER } from "../actions/" 
 
let planetState = { planets: [], loading:true };
 
const planetReducer = (state = planetState , action) => {

    switch (action.type) {
        case PLANETS_AVAILABLE :
            state = Object.assign({}, state, { planets: action.planets, loading:false });
            return state;
            case SEARCH_FILTER:
            state = Object.assign({}, state, { planets: action.planets, loading:false });
            return state;
        default:
            return state;
    }
};
const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state)
    return newState || state
  }
const rootReducer = combineReducers({
    planetReducer,
    navReducer
})
 
export default rootReducer;