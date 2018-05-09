import { combineReducers } from 'redux';
 
import { PLANETS_AVAILABLE } from "../actions/" 
 
let planetState = { planets: [], loading:true };
 
const planetReducer = (state = planetState , action) => {
    switch (action.type) {
        case PLANETS_AVAILABLE :
            state = Object.assign({}, state, { planets: action.data, loading:false });
            return state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    planetReducer

})
 
export default rootReducer;